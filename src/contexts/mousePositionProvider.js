import React, { useState } from 'react';

const MousePositionContext = React.createContext();

const MousePositionProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <MousePositionContext.Provider value={mousePosition}>
      <div onMouseMove={handleMouseMove}>
        {children}
      </div>
    </MousePositionContext.Provider>
  );
};

export { MousePositionProvider, MousePositionContext };
