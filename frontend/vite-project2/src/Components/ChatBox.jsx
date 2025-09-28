import { useState } from "react";

export function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hi 👋 I’m Gemini AI. Enter an item to classify it!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://recycle-x.agali9.workers.dev/classify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ item: input }),
        }
      );

      const data = await res.json();

      const aiText =
        data?.candidates?.[0]?.content?.[0]?.text || "Could not classify item";

      const aiMessage = { sender: "AI", text: aiText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: "⚠️ Error: Could not reach backend." },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#f9f4eb] rounded-lg shadow-md w-full max-w-lg">
      <div className="w-full h-64 overflow-y-auto mb-4 border border-gray-300 rounded p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.sender === "AI" ? "bg-green-100 text-green-900" : "bg-blue-100 text-blue-900 text-right"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="flex w-full gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Type an item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? "Classifying..." : "Send"}
        </button>
      </div>
    </div>
  );
}