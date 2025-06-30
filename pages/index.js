import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { type: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { type: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-[#333] mb-4">👩‍⚖️ Lawzi</h1>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-3 overflow-y-auto max-h-[70vh]">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-xl ${msg.type === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-500">Thinking...</div>}
      </div>
      <div className="flex mt-4 w-full max-w-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow p-2 rounded-l-xl border"
          placeholder="Ask a legal question..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}
