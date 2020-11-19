import React, { useEffect } from 'react';

export default function BetterImage(props) {

/////////////////* HOISTED VARIABLES *////////////////////////////
  const { resize, source, quality, format, instance, instanceFunc } = props;
  let resizedImageWidth;
  let resizedImageHeight;

//////////////////* HELPER fUNCTIONS *///////////////////
    ////////////////////* import all images in optimized folder */////////////////////
    function importAll(r) {
      let images = {};
      r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    
    const images = importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));

    //////////////////////////* Extract Image Name * ////////////////////
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

//////////////////* MAIN fUNCTIONS *///////////////////
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

  ////////////////* Convert Image Format to WEBP Functionality */////////////////
  function convertImg(source, quality){
    let imageName = extractName(source);
    
    if(instance === false){
      instanceFunc()

      console.log(instance) // false???? 

      fetch('/api/convert', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json' 
           },
          body: JSON.stringify({
            imageName: imageName,
            quality: quality
          })
      })
    } 
  }

  ////////////////////* Chaining the APIs Together */////////////////////
  function renderImage() {
  // check cache
  if(!images[`${imgName}.webp`]){

  } 
  }
  ///////////////* Checking if optimized image exists in detination */////////////////////
  resizeFunc(resize)
  convertImg(source, quality)

  ////////////////////* Render the modifed image component */////////////////////
  return (
    <div>
    <img src={images[`${imgName}.webp`]} style={{width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`}} alt="image failed to load"/>
  </div>
  )

}// end of functional component
