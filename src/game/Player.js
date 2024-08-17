import React from 'react';


// Player in the middle of the screen
const Player = () => {
  return (
    <div style={{
      width: '50px',
      height: '50px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'blue' // Temporary style
    }} />
  );
};

export default Player;
