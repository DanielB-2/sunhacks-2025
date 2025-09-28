import { useState } from "react";

export function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I'm here to help answer any questions you have about recycling!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://recycle-x.agali9.workers.dev/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply =
        data.reply?.trim() || "Sorry, I couldn’t find an answer.";

      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Error: Could not reach server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 h-96 flex flex-col">
      <button className="right-[10px] absolute" id="close-help-bot-popup" onClick={() => {
          let helpPopupClassList = document.getElementById('help-bot-popup').classList;

          //close the help bot popup
            helpPopupClassList.add('hidden');
            helpPopupClassList.remove("-translate-y-full");

          }
          
          }><p className="text-2xl" >X</p></button>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-3 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "bg-green-100 ml-auto text-right"
                : "bg-gray-100 mr-auto text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <p className="text-sm text-gray-500 italic">Bot is typing...</p>
        )}
      </div>

      {/* Input */}
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          placeholder="Ask me about recycling..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
