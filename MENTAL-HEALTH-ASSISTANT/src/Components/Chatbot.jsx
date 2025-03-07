// src/components/Chatbot.jsx
import React, { useState } from 'react';
import ChatMessage from './ChatBotMessages';
import './Chatbot.css';

const API_KEY = 'AIzaSyBxUTvizx48YYkiEKGNPRe1XKlcp7D5xDw'; 
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (message, isUser) => {
    setMessages(prevMessages => [...prevMessages, { message, isUser }]);
  };

  const handleUserInput = async () => {
    const userMessage = userInput.trim();
    if (!userMessage) return;

    addMessage(userMessage, true);
    setUserInput('');
    setIsSending(true);

    try {
      const response = await generateResponse(userMessage);
      simulateTypingEffect(response); // Show AI's response with typing effect
    } catch (error) {
      console.error(error);
      addMessage('Sorry, I encountered an error. Please try again.', false);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isSending) { // Trigger on Enter key and ensure message isn't already being sent
      handleUserInput();
    }
  };

  const generateResponse = async (prompt) => {
    const healthRelatedPrompt = `
      Focus on providing health and mental well-being advice. If the user is asking for help with stress, anxiety, or health tips, suggest appropriate solutions.
      Always be positive, supportive, and offer relaxation techniques or light-hearted content when necessary. You can even tell a joke or offer uplifting quotes to improve the user's mood.
      Here are some examples:
      1. Suggest ways to relax or de-stress.
      2. Recommend breathing exercises or self-care tips.
      3. Tell a funny joke to lighten the mood.
      4. Offer motivational or positive messages.
      Always ensure the response aligns with health and well-being, providing useful or uplifting content.

      User message: ${prompt}
    `;

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: healthRelatedPrompt }] }], 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate response');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  // Simulate the typing effect by adding each character of the AI response progressively
  const simulateTypingEffect = (response) => {
    setIsTyping(true);
    let index = 0;
    let currentMessage = '';
    const typingInterval = setInterval(() => {
      if (index < response.length) {
        currentMessage += response.charAt(index);
        if (index === 0) {
          addMessage(currentMessage, false); // Add the initial character
        } else {
          setMessages(prevMessages => {
            const newMessages = [...prevMessages];
            newMessages[newMessages.length - 1].message = currentMessage; // Update the last message
            return newMessages;
          });
        }
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // Adjust typing speed by changing the delay (in ms)
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>MINDORA</h1>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
        ))}
        {isTyping && (
          <div className="chat-typing-indicator">
            <span>...</span> {/* Simulating typing dots */}
          </div>
        )}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          id="user-input"
          value={userInput}
          placeholder="I'm all ears"
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key press
        />
        <div
          id="send-button"
          onClick={handleUserInput}
          disabled={isSending}
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
