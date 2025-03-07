// src/components/ChatMessage.jsx
import React from 'react';
import user from '../assets/icon-5359553_640.webp'
import bot from '../assets/bot.webp'
const ChatBotMessages = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <img
        className="profile-image"
        src={isUser?user:bot}
        width={20}
        height={20}
      />
      <div className="message-content">{message}</div>
    </div>
  );
};

export default ChatBotMessages;
