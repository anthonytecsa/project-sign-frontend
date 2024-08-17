import React from 'react';

function Key({ letter, onSelectLetter }) {
  return (
    <button onClick={() => onSelectLetter(letter)} className="key">
      {letter}
    </button>
  );
}

export default Key;