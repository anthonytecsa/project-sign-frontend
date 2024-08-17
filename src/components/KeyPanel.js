import React from 'react';
import './learnPage.css'; 

function Key({ letter, isActive, onSelectLetter }) {
  return (
    <button
      onClick={onSelectLetter}
      className={`key ${isActive ? 'active' : ''}`}
    >
      {letter}
    </button>
  );
}

export default Key;