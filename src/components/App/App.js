import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';


class App extends Component {

  render() { 
    return (
      <div>
        <BetterImage
          source={originalImage}
          resize={'900x1200'}
          format={'webp'}
        />
      </div>
    );
  }
}

export default App;
