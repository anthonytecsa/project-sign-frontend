import React from 'react';
import Keyboard from './keyboard.js';
import Footer from './Footer.js';
import ChatBot from './ChatBot.js';

function LearnPage() {
  return (
    <div className="learn-page">
      <h1>Learn Sign Language</h1>
      <p>Welcome to the interactive sign language learning page. Click on any letter below to see the sign language gesture.</p>
      <div className="learn-page-content">
        <Keyboard />
        <ChatBot />
      </div>



      <div class="footer-section">
        <Footer/>
      </div>
    </div>
  );
}

export default LearnPage;
