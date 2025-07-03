import React, { useState, useEffect } from 'react';

const WindowResizeListener = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontSize: '18px' }}>
      <strong>Window width:</strong> {windowWidth}px
    </div>
  );
};

export default WindowResizeListener;
