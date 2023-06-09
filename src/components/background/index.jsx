import React, { useContext } from 'react';
import './style.css';
import { MousePositionContext } from '../../contexts/mousePositionProvider';

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
    </div>
  );
};

export default Background;
