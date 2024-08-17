import React, { useState, useEffect, useRef } from 'react';
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

    async function sendMessage() {
        if (inputValue.trim() === '') return;

        const userMessage = { text: inputValue, isUser: true };
        setMessages(msgs => [...msgs, userMessage]);
        setInputValue(''); 
        setIsLoading(true);

        try {

            // api here


            setTimeout(() => {
                const aiResponse = { text: "Hi, I'm the AI responding", isUser: false };
                setMessages(msgs => [...msgs, aiResponse]);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            const errorMessage = { text: 'Error: Unable to get a response from the server.', isUser: false };
            setMessages(msgs => [...msgs, errorMessage]);
            setIsLoading(false);
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
                        <img class="persona-character" alt="personacharacter" src='./images/persona-character.png'></img>
                        <h1>Foxy</h1>
                        <p>Hi I'm Foxy! I can help you with any questions about sign-language and give you resources to learn more.</p>
                </div>
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container ${msg.isUser ? 'message-user' : 'message-bot'}`}>
                        {!msg.isUser && <img src='./images/persona-logo.png' alt="AI Icon" className='ai-icon'/>}
                        <div className='message-content'>{msg.text}</div>
                    </div>
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



