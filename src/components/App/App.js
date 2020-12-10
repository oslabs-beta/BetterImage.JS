import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';

class App extends Component {
  render() { 
    return (
      <div>
        <BetterImage source={'./images/cat.png'} quality={'80'} resize={'1200x800'} />
        
        <BetterImage
          source={'./images/avocado.png'} 
          quality={'80'} 
          resize={'600x800'}
          rotation={'360'} 
          grayscale={'0'} 
          blur={'0'} 
          brightness={'100'}
          contrast={'100'}
          dropShadow={'0,0,0,gray'} 
          sepia={'0'} 
          saturate={'100'} 
          opacity={'100'}
          invert={'0'} 
          hueRotate={'0'} 
          border={'0,solid,red'} 
          roundCorners={'0'} 
          translate={'0, 0'} 
          scale={'1,1'}
          skew={'0,0'} 
          rotateX={'0'}
          rotateY={'0'} 
          perspective={'0'}
          matrix={'1,0,0,1,0,0'}
        />
      </div>
    );
  }
}

export default App;
