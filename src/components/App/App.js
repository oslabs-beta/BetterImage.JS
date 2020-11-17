import React from 'react';
import BetterImage from '../BetterImage/BetterImage.js';

function App() {
  return (
    <div>
      <BetterImage
        source={'https://picsum.photos/200/300'}
        resize={'500x500'}
      />
    </div>
  );
}

export default App;
