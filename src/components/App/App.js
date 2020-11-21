import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';
import bigPNG from "./images/bigPNG.png"


class App extends Component {

  render() { 
    return (
      <div>
        <BetterImage
          source={bigPNG}
          resize={'900x1200'}
          format={'webp'}
          quality={100}
        />
      </div>
    );
  }
}

export default App;
