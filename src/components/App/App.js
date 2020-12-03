import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';

class App extends Component {
  render() { 
    return (
      <div>
        <h1> Original Image </h1>
          <img src={originalImage} />

        <h1> BetterImage</h1> 
          <BetterImage
            source={originalImage} // file import path
            resize={'600x800'} // ratio
            quality={'100'}// quality
            rotation={'360'} // in degrees
            grayscale={'0'} // in percentage
            blur={'0'} // in pixels
            brightness={'100'} // in percentage
            contrast={'100'} // percentage
            dropShadow={'0,0,0,gray'} // px px px color
            sepia={'0'} // percentage
            saturate={'100'} // percentage
            opacity={'100'} // percentage
            invert={'0'} // percentage
            hueRotate={'0'} // degrees
            border={'0,solid,red'} // px solid color
            roundCorners={'0'} // px
            translate={'0, 0'} // px %
            scale={'1,1'} // ScaleX ScaleY
            skew={'0,0'} // deg deg
            rotateX={'0'} // deg
            rotateY={'0'} // deg
            perspective={'0'} // px
            matrix={'1,0,0,1,0,0'} // scaleX,skewY,skewX,scaleY,translateX,translateY
          />
      </div>
    );
  }
}

export default App;
