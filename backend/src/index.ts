/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);

    // --- Handle CORS Preflight ---
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // --- Routes ---
    switch (url.pathname) {
      case "/message":
        return new Response("Hello!");

      case "/random":
        return new Response(crypto.randomUUID());

      // --- Image classification ---
		case "/classify-image": {
		if (request.method !== "POST") {
			return new Response("Method Not Allowed", { status: 405 });
		}

		try {
			const formData = await request.formData();
			const file = formData.get("file") as File;

			if (!file) {
			return new Response(
				JSON.stringify({ result: "No file uploaded" }),
				{ headers: { "Content-Type": "application/json" } }
			);
			}

			const arrayBuffer = await file.arrayBuffer();
			const bytes = new Uint8Array(arrayBuffer);
			let binary = "";
			for (let i = 0; i < bytes.length; i++) {
			binary += String.fromCharCode(bytes[i]);
			}
			const base64Data = btoa(binary);

			const geminiResponse = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
				contents: [
					{
					parts: [
						{ text: "Classify this waste item into recyclable, compostable, or trash." },
						{
						inline_data: {
							mime_type: file.type || "image/jpeg",
							data: base64Data,
						},
						},
					],
					},
				],
				}),
			}
			);

			const data = await geminiResponse.json();
			const result =
			data?.candidates?.[0]?.content?.[0]?.text?.trim() ||
			data?.candidates?.[0]?.content?.[1]?.text?.trim() ||
			"Could not classify item.";

			return new Response(
			JSON.stringify({
				result,
				fileName: file.name,
				mimeType: file.type,
				sizeKB: (file.size / 1024).toFixed(2),
			}),
			{
				headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				},
			}
			);
		} catch (err) {
			return new Response(
			JSON.stringify({ error: "Image classification failed", details: String(err) }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
			);
		}
		}

      case "/chat": {
        if (request.method !== "POST") {
          return new Response("Method Not Allowed", { status: 405 });
        }

        try {
          const { message } = await request.json();

          const geminiResponse = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=" +
              env.GEMINI_API_KEY,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `You are an expert on recycling and sustainable practices. 
								Answer the following clearly and helpfully. Keep it as short and concise as you can(1-2 sentences): ${message}`,
                      },
                    ],
                  },
                ],
              }),
            }
          );

          const geminiData = await geminiResponse.json();
          const parts = geminiData?.candidates?.[0]?.content?.parts;
		const reply = parts && parts.length > 0 && parts[0].text
		? parts[0].text
		: "🤖 Sorry, I couldn’t find an answer.";


          return new Response(JSON.stringify({ reply }), {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
        } catch (err) {
          return new Response(
            JSON.stringify({ error: "Chat failed", details: String(err) }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      }

      default:
        return new Response("Not Found", { status: 404 });
    }
  },
} satisfies ExportedHandler<Env>;
