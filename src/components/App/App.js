import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';
import bigPNG from "./images/bigPNG.png"

class App extends Component {
  render() { 
    return (
      <div>
        <h1> Original Image </h1>
          {/* <img src={originalImage} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
          <img src={img10} />
          <img src={img11} />
          <img src={img12} /> */}


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
        <BetterImage
            source={img1} // file import path
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
        <BetterImage
            source={img2} // file import path
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
        <BetterImage
            source={img3} // file import path
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
        <BetterImage
            source={img4} // file import path
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
        <BetterImage
            source={img5} // file import path
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
        <BetterImage
            source={img6} // file import path
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
        <BetterImage
            source={img7} // file import path
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
        <BetterImage
            source={img8} // file import path
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
        <BetterImage
            source={img9} // file import path
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
        <BetterImage
            source={img10} // file import path
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
        <BetterImage
            source={img11} // file import path
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
        <BetterImage
            source={img12} // file import path
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
