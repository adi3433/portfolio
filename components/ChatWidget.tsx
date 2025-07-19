import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { startChat, sendMessage } from '../services/geminiService';
import { Chat } from '@google/genai';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatInstance = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && !chatInstance.current) {
      chatInstance.current = startChat();
      setMessages([
        { id: Date.now(), sender: 'ai', text: "Hi! I'm Adithyan's AI assistant. Ask me anything about his resume." }
      ]);
    }
  }, [isOpen]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiMessageId = Date.now() + 1;
    setMessages(prev => [...prev, { id: aiMessageId, sender: 'ai', text: '' }]);

    try {
      if (chatInstance.current) {
        const stream = await sendMessage(chatInstance.current, userMessage.text);
        for await (const chunk of stream) {
            const chunkText = chunk.text;
            setMessages(prev => prev.map(msg => 
              msg.id === aiMessageId ? { ...msg, text: msg.text + chunkText } : msg
            ));
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => prev.map(msg =>
        msg.id === aiMessageId ? { ...msg, text: "Sorry, I encountered an error. Please try again." } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-black z-50 border border-slate-600"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-2xl flex flex-col z-40 border border-slate-700 transition-all duration-300 ease-out transform origin-bottom-right animate-fade-in-up">
          <header className="p-4 bg-slate-900 text-white font-semibold rounded-t-lg border-b border-slate-700">
            AI Assistant
          </header>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">AI</div>}
                  <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                    {msg.text || (isLoading && msg.id === messages[messages.length - 1].id ? <div className="typing-indicator"><span></span><span></span><span></span></div> : null)}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <style>{`
                .typing-indicator span {
                    height: 8px;
                    width: 8px;
                    background-color: #94a3b8; /* slate-400 */
                    border-radius: 50%;
                    display: inline-block;
                    animation: bounce 1.4s infinite ease-in-out both;
                }
                .typing-indicator span:nth-of-type(1) { animation-delay: -0.32s; }
                .typing-indicator span:nth-of-type(2) { animation-delay: -0.16s; }
                @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
                .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
            `}</style>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700 bg-slate-900/50 rounded-b-lg">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-700 border border-slate-600 rounded-full py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-cyan-500 text-white rounded-full p-2 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Send message"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;