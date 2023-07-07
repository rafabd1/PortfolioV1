import React, { useContext } from 'react';
import './style.css';
import { MousePositionContext } from '../../contexts/mousePositionProvider';
import ParticlesBackground from './ParticlesBackground';

const Background = () => {
  const mousePosition = useContext(MousePositionContext);


  return (
    <div
      className="background"
    >
      <div
        className="highlight"
        style={{
          top: mousePosition.y,
          left: mousePosition.x,
        }}
      ></div>

      <ParticlesBackground />
    </div>
  );
};

export default Background;
