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

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		switch (url.pathname) {
			case '/message':
				return new Response('Hello!');
			case '/random':
				return new Response(crypto.randomUUID());
			case "/classify":
				if (request.method === "OPTIONS") {
					return new Response(null, {
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "POST, GET, OPTIONS",
						"Access-Control-Allow-Headers": "Content-Type",
					},
					});
				}

				if (request.method !== "POST") {
					return new Response("Method Not Allowed", { status: 405 });
				}

				const body = await request.json<{ item: string }>();
				const { item } = body;

				const geminiResponse = await fetch(
					"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + env.GEMINI_API_KEY,
					{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						contents: [
						{
							parts: [
							{ text: `Classify this waste item: ${item}. Respond with: recyclable, compostable, or trash.` }
							]
						}
						]
					})
					}
				);

				const geminiData = await geminiResponse.json();

				return new Response(JSON.stringify(geminiData), {
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*", 
						"Access-Control-Allow-Methods": "POST, GET, OPTIONS"
					}
				});




			default:
				return new Response('Not Found', { status: 404 });
		}
	},
} satisfies ExportedHandler<Env>;
