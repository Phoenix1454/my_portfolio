import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hey — I'm an AI that knows everything about Amit. Ask me anything." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.content || 'Something went wrong.' }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Failed to connect. Try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const suggestions = ['What projects has Amit built?', 'What is he good at?', 'Is he open to work?'];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Chat panel */}
      {open && (
        <div className="w-80 sm:w-96 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: '480px' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-900">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-AAsecondary animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-200">Ask about Amit</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-300 text-lg leading-none">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-AAsecondary text-gray-900 font-medium'
                    : 'bg-gray-800 text-gray-300'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-xl px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-AAsecondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-AAsecondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-AAsecondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            {/* Suggestions — show only at start */}
            {messages.length === 1 && (
              <div className="space-y-2 pt-1">
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => { setInput(s); }}
                    className="w-full text-left text-xs px-3 py-2 rounded-lg border border-gray-700 text-gray-400 hover:border-AAsecondary hover:text-AAsecondary transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-gray-700 flex items-center space-x-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything..."
              className="flex-1 bg-gray-800 text-gray-200 text-sm rounded-lg px-3 py-2 outline-none border border-gray-700 focus:border-AAsecondary placeholder-gray-600"
            />
            <button onClick={send} disabled={loading || !input.trim()}
              className="bg-AAsecondary text-gray-900 rounded-lg px-3 py-2 text-sm font-bold disabled:opacity-40 hover:opacity-90 transition-opacity">
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full bg-AAsecondary text-gray-900 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Chat with AI"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
