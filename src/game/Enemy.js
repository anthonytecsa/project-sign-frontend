import React from 'react';

// Enemies g
const Enemy = ({ position, health }) => {
  return (
    <div style={{
      width: '30px',
      height: '30px',
      position: 'absolute',
      left: `${position.x}%`,
      top: `${position.y}%`,
      backgroundColor: 'red' // Temporary style
    }} />
  );
};

export default Enemy;
