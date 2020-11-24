import React from 'react';
import webp from 'webp-converter';

export default function BetterImage(props) {
  const { resize, source, format, rotation } = props;

  ///////////////////////////* Hoisted Variables */////////////////////////////
  let resizedImageWidth;
  let resizedImageHeight;
  let rotationDegree;

  /////////////////////////* Image Resize Functionality *////////////////////////
  function resizeFunc(string) {
    let foundX = false;
    let num1 = '';
    let num2 = '';

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== 'x' && foundX === false) {
        num1 = num1.concat(string[i]);
      } else if (string[i] === 'x') {
        foundX = true;
      } else if (string[i] !== 'x' && foundX === true) {
        num2 = num2.concat(string[i]);
      }
    }
    resizedImageHeight = Number(num1);
    resizedImageWidth = Number(num2);

    return;
  }

  function rotateImg(degree){
    rotationDegree = degree;
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
      // res should return image name passed from source
    )
  }

  ////////////////////* converted Images are declared */////////////////////
  // format
  const convert = convertedImg(source);
  // resize
  const createImg = resizeFunc(resize, source);
  // rotate
  const rotatedImg = rotateImg(rotation);

  ////////////////////* import all images in optimized folder */////////////////////
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));
  // custom reverse function
  function reverse(s){
    return s.split("").reverse().join("");
  };
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
      <img src={images[`${imgName}.webp`]} style={{transform: `rotate(${rotationDegree}deg)`, width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`}} alt="image failed to load"/>
    </div>
  );

}
