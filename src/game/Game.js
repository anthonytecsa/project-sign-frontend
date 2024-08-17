// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Player from './Player';
import Enemy from './Enemy';
import HealthBar from './HealthBar';


const Game = () => {
  const [enemies, setEnemies] = useState([]);
  const [health, setHealth] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      spawnEnemy();
    }, 3000); // Spawns an enemy every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveEnemies = () => {
      setEnemies(enemies =>
        enemies.map(enemy => {
          let { x, y } = enemy.position;
          const speed = 0.5; // Adjust the speed as necessary
          const dx = 50 - x, dy = 50 - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const moveX = speed * (dx / distance);
          const moveY = speed * (dy / distance);
  
          return {
            ...enemy,
            position: {
              x: x + moveX,
              y: y + moveY
            }
          };
        })
      );
    };
  
    const interval = setInterval(moveEnemies, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkCollisions = () => {
      enemies.forEach(enemy => {
        const { x, y } = enemy.position;
        // Assume collision if enemy is within 2% of the center
        if (Math.abs(x - 50) < 2 && Math.abs(y - 50) < 2) {
          setHealth(health => {
            const newHealth = health - 1;
            if (newHealth <= 0) {
              setGameOver(true);
              clearInterval(interval);
            }
            return newHealth;
          });
          // Remove enemy after collision
          setEnemies(enemies => enemies.filter(e => e !== enemy));
        }
      });
    };

    const interval = setInterval(checkCollisions, 100);
    return () => clearInterval(interval);
  }, [enemies]);

  const spawnEnemy = () => {
    const edge = Math.floor(Math.random() * 4);
    let x = 50, y = 50;

    // Randomly place enemies at the edges
    if (edge === 0) { // Top edge
      x = Math.random() * 100;
      y = 0;
    } else if (edge === 1) { // Right edge
      x = 100;
      y = Math.random() * 100;
    } else if (edge === 2) { // Bottom edge
      x = Math.random() * 100;
      y = 100;
    } else { // Left edge
      x = 0;
      y = Math.random() * 100;
    }

    const newEnemy = {
      id: Date.now(),
      position: { x, y }
    };

    setEnemies(enemies => [...enemies, newEnemy]);
  };

  // Initiate game over screen (can create new component)
  if (gameOver) {
    return <div style={{ fontSize: '24px', textAlign: 'center' }}>Game Over</div>;
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <HealthBar health={health} />
      <Player />
      {enemies.map(enemy => (
        <Enemy key={enemy.id} position={enemy.position} />
      ))}
    </div>
  );
};

export default Game;
