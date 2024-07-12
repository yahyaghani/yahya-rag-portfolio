import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ChatWidget.css';

const ChatWidget = ({ isOpen, setIsOpen, initialMessage }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (initialMessage) {
      setMessages([{ text: initialMessage, sender: 'user' }]);
      handleSendMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    if (isOpen) {
      document.querySelector('.chat-window .chat-body').scrollTop = document.querySelector('.chat-window .chat-body').scrollHeight;
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (messageText) => {
    const newMessage = { text: messageText || input, sender: 'user' };
    setMessages([...messages, newMessage]);

    try {
      // const response = await fetch('http://localhost:5000/query', {
      const response = await fetch('https://back.yahyaghani.com/query', { // Updated endpoint

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query_text: messageText || input }),
      });

      const data = await response.json();
      const botMessage = { text: data.results, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }

    setInput('');
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="glow-card glow-card-experience-1 h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full px-4 lg:px-8 py-3 lg:py-5 flex justify-between items-center">
            <span className="text-center text-[#16f2b3] text-base lg:text-xl">Chat with Yahya AI</span>
            <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-red-400 cursor-pointer" onClick={toggleChat}></div>
          </div>
          <div className="overflow-y-auto border-t-[2px] border-indigo-900 px-2 lg:px-4 py-2 lg:py-4 chat-body">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender === 'user' ? 'text-green-400' : 'text-blue-400'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="chat-footer flex justify-center mt-4 px-4 lg:px-8 py-3 lg:py-5">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-l-lg border-2 border-indigo-900 placeholder-gray-500 bg-[#101123] text-gray-200"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-r-lg"
            >
              <span>Send</span>
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="chat-circle" onClick={toggleChat}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#50615f" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }}>
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
