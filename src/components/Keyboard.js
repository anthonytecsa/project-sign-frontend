import React, { useState, useEffect } from 'react';
import Key from './KeyPanel';

function Keyboard() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  // Effect to add and remove the keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (alphabet.includes(key)) {
        setSelectedLetter(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [alphabet]);

  return (
    <div className="learn-page">
      <div className="sign-language-display">
        <div className="letter-display">{selectedLetter}</div>
        <img src={`/images/${selectedLetter}.svg`} alt={`Sign language for ${selectedLetter}`} />
      </div>
      <div className="keyboard-container">
        {alphabet.map((letter) => (
          <Key
            key={letter}
            letter={letter}
            isActive={selectedLetter === letter}
            onSelectLetter={() => setSelectedLetter(letter)}
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
