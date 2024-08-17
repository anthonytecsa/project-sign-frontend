import React, { useState } from 'react';
import Key from './Key';
import './styles.css'; // Import your CSS for styling

function Keyboard() {
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleSelectLetter = letter => {
    setSelectedLetter(letter);
    // Here you might want to fetch or change the sign language image based on the letter
  };

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="keyboard-container">
      {alphabet.map(letter => (
        <Key key={letter} letter={letter} onSelectLetter={handleSelectLetter} />
      ))}
      <div className="sign-language-display">
        {selectedLetter && <img src={`/path/to/sign-language-images/${selectedLetter}.png`} alt={`Sign language for ${selectedLetter}`} />}
      </div>
    </div>
  );
}

export default Keyboard;
