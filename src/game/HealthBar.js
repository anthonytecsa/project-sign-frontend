// src/components/HealthBar.js
import React from 'react';

const HealthBar = ({ health }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      width: '200px',
      height: '20px',
      backgroundColor: 'grey'
    }}>
      <div style={{
        width: `${health * 100 / 3}%`,
        height: '100%',
        backgroundColor: 'green'
      }} />
    </div>
  );
};

export default HealthBar;
