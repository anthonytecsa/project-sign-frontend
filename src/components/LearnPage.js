import React from 'react';
import Keyboard from './keyboard.js';
import Footer from './Footer.js';
import ChatBot from './ChatBot.js';
import Header from './Header.js';

function LearnPage() {
  return (
    <div className="learn-page">
      <div className="content-wrapper">
        <div className="header-container">      
          <Header />
        </div>
        <div className="learn-page-description">
          <h1>Learn Sign Language</h1>
          <p>Welcome to the interactive sign language learning page. </p>
          <p className="instructions">Click on a letter or press a kaey on your keyboard to see the sign language equivalent. Toggle typing to enable or disable keyboard interaction.
            Feel free to chat with Foxy to learn more about sign language!</p>
        </div>
        
        <div className="learn-page-content">
          <Keyboard />
          <ChatBot />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default LearnPage;
