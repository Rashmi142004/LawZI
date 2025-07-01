import { useState } from 'react';

export default function Ask() {
  const [selected, setSelected] = useState('');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    setResponse('...');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });
      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setResponse('Error getting response.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <h1 className="text-3xl font-heading text-lawzi mb-6">Ask Lawzi</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {['FIR', 'Housing', 'Harassment', 'Upload Docs'].map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`py-2 px-4 rounded border ${
              selected === item ? 'bg-lawzi text-white' : 'border-lawzi text-lawzi'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <textarea
        className="w-full p-4 bg-gray-800 text-white rounded mb-4"
        rows="4"
        placeholder="Ask your legal question here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAsk}
        className="bg-lawzi px-6 py-2 rounded text-white"
      >
        Submit
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-900 rounded text-sm">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
