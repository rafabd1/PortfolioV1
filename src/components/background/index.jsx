import React, { useState } from 'react';
import './style.css';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="background"
      onMouseMove={handleMouseMove}
    >
      {/* Conteúdo da sua página */}
      <div
        className="highlight"
        style={{
          top: mousePosition.y - 0,
          left: mousePosition.x - 0,
        }}
      ></div>
    </div>
  );
};

export default Background;
