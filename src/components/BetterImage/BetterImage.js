import React from 'react';
import webp from 'webp-converter';

export default function BetterImage(props) {
  const { resize, source, format, rotation, blur, grayscale, brightness, contrast, sepia, invert, saturate, opacity, hueRotate, dropShadow, roundCorners, border } = props;

  ///////////////////////* Hoisted Variables *///////////////////////
  let resizedImageWidth;
  let resizedImageHeight;
  let rotationDegree;
  let shadowX;
  let shadowY;
  let shadowSize;
  let shadowColor;
  let borderThick;
  let borderColor;
  let borderLine;

  //////////////////////* Image Resize Functionality */////////////////////
  function resizeFunc(string) {
    string = string.split("x");
    resizedImageHeight = string[0]
    resizedImageWidth = string[1]
  }

  function borderImage(string){
    string = string.split(",");
    borderThick = string[0];
    borderLine = string[1];
    borderColor = string[2];
  }

  function rotateImg(degree){
    rotationDegree = degree;
  }
  
  function shadowImg(dropShadow){
    dropShadow = dropShadow.split(",");
    shadowX = dropShadow[0]
    shadowY = dropShadow[1]
    shadowSize = dropShadow[2]
    shadowColor = dropShadow[3]
  }
  
  ////////////////* Convert Image Format to WEBP Functionality */////////////////
  function convertedImg(source){
    fetch('/api/convert', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json' 
         },
        body: JSON.stringify({image: source})
    })
    .then(
    )
  }

  ////////////////////* converted Images are declared */////////////////////
  // format
  const convert = convertedImg(source);
  // resize
  const createImg = resizeFunc(resize, source);
  // rotate
  const rotatedImg = rotateImg(rotation);
  // shadow
  const sdwImg = shadowImg(dropShadow);
  // border
  const borderImg = borderImage(border);

  ////////////////////* import all images in optimized folder */////////////////////
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));

  // if regex possible, find one
  function extractName(string){
    let arr = string.split('').reverse();
    let indexDot = arr.indexOf('.');
    let indexSlash = arr.indexOf('/');
    let substring = arr.join('').substring(indexDot+1, indexSlash);
    let firstString = substring.split("").reverse().join("");
    let arr2 = firstString.split('');
    let secondDot = arr2.indexOf('.');
    let substring2 = arr2.join('').substring(0, secondDot);
    return substring2;
  }

  let imgName = extractName(source);

  ////////////////////* Chaining the APIs Together */////////////////////
  // switch statement


  ////////////////////* Render the modifed image component */////////////////////
  return (
    <div>
      {convert}
      {createImg}
      {rotatedImg}
      {sdwImg}
      {borderImg}
      <img src={images[`${imgName}.webp`]} style={{filter:`grayscale(${grayscale}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%) invert(${invert}%) saturate(${saturate}%) opacity(${opacity}%) hue-rotate(${hueRotate}deg) drop-shadow(${shadowX}px ${shadowY}px ${shadowSize}px ${shadowColor})`, transform: `rotate(${rotationDegree}deg)`, width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`, borderRadius: `${roundCorners}px`, border: `${borderThick}px ${borderLine} ${borderColor}`}} alt="image failed to load"/>
    </div>
  );

}
