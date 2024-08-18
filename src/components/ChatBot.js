import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked@4.0.12/lib/marked.esm.js';

import "./chatbot.css";

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null); // Reference to the text input
    const chatBoxRef = useRef(null); // Reference to the chatbox

    // Scroll to the bottom of the chatbox whenever messages update
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    // instantiate marked renderer
    const renderer = new marked.Renderer();
    renderer.image = () => ''; // Disable images
    renderer.paragraph = (text) => text;
    renderer.link = (href, title, text) => {
        console.log('Link HREF:', href);
        console.log('Link Title:', title);
        console.log('Link Text:', text);
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    };

    marked.setOptions({
        renderer,
        pedantic: true
    });

    async function sendMessage() {
        if (inputValue.trim() === '') return;

        const userMessage = { text: inputValue, isUser: true };
        setMessages(msgs => [...msgs, userMessage]);
        setInputValue(''); 
        setIsLoading(true);

        try {
            const response = await fetch('https://project-sign-backend.onrender.com/chat', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: inputValue }) 
            });

            const data = await response.json(); 
            console.log(data);
            const botMessage = marked.parse(data.response)
            const aiResponse = { text: botMessage, isUser: false }; 
            setMessages(msgs => [...msgs, aiResponse]);
        } catch (error) {
            console.error('Error fetching data:', error);
            const errorMessage = { text: 'Error: Unable to get a response from the server.', isUser: false };
            setMessages(msgs => [...msgs, errorMessage]);
        } finally {
            setIsLoading(false); // Ensure loading is stopped regardless of the outcome
        }
    }
    

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div id="chat-container">
            <div id="chat-header">
                <div className="logo">
                    <img src='./images/persona-logo.png' alt="Chatbot Logo"/>
                </div>
                <div className="title">
                    <h1>Foxy the ASL Expert</h1>
                    <p>Online</p>            
                </div>
            </div>
            
            <div id="chat-box" ref={chatBoxRef}>
                <div id="persona-box">
                        <img className="persona-character" alt="personacharacter" src='./images/persona-character.png'></img>
                        <h1>Foxy</h1>
                        <p>Hi I'm Foxy! I can help you with any questions about sign-language and give you resources to learn more.</p>
                </div>
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container ${msg.isUser ? 'message-user' : 'message-bot'}`}>
                        {!msg.isUser && <img src='./images/persona-logo.png' alt="AI Icon" className='ai-icon'/>}
                        <div className='message-content' dangerouslySetInnerHTML={{ __html: msg.text }}></div></div>
                ))}
                {isLoading && <div className='message-container message-bot'>
                    <img src='./images/loading_transparent.gif' alt="Typing" className='typing-indicator'/>
                </div>}
            </div>
            <div className="input-container">
                <input type="text" id="chat-input" placeholder="Send message..." 
                    value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} ref={inputRef} />
                <button id="send-button" onClick={sendMessage} disabled={isLoading}><i className="fas fa-paper-plane"></i></button>
            </div>
        </div>
    );
}

export default ChatBot;



