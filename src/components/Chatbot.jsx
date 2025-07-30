// Bot.jsx (or Chatbot.jsx)
import React, { useState } from 'react';

function Bot() { // Renamed App to Bot
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <> {/* Using a Fragment as there's no single root element */}
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-all duration-300 z-50"
        aria-label="Open Chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-fade-in">
          <div className="flex justify-between items-center bg-orange-500 text-white p-4 rounded-t-lg">
            <h4 className="font-semibold">Ninja Assistant</h4>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close Chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 text-gray-800">
            <p className="mb-2 bg-gray-100 p-3 rounded-lg">Welcome to Coding Ninjas chat support. How can we help you?</p>
            <div className="flex flex-col gap-2 mt-4">
              <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200">
                Know about courses
              </button>
              <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200">
                Need help with something else
              </button>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Your message"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      )}

      {/* Custom Tailwind Animation for fade-in (can be moved to a global CSS file if preferred) */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        `}
      </style>
    </>
  );
}

export default Bot; // Export the component