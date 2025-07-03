import React from 'react';
import WindowResizeListener from './WindowResizeListener';

const App = () => {
  return (
    <div>
      <h1>Resize the browser window</h1>
      <WindowResizeListener />
    </div>
  );
};

export default App;
