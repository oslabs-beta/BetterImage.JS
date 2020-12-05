import React from 'react';
import { Img } from 'react-image';

export default function BetterImage(props) {
  ////////////////////* Hoisted Constants *////////////
  const { resize, source, quality, rotation, blur, grayscale, brightness, contrast, sepia, invert, saturate, opacity, hueRotate, dropShadow, roundCorners, border, matrix, translate, scale, skew, perspective, rotateX, rotateY } = props;

  const fileName = source.split('/').pop();
  const originalImageType = fileName.split('.').pop();
  const imgName = fileName.split('.').shift();

  ///////////////////////* Hoisted Variables *///////////////////////
  let resizedImageWidth;
  let resizedImageHeight;
  let rotationDegree;
  let shadowX;
  let shadowY;
  let shadowSize;
  let shadowColor;
  let borderColor;
  let borderThick;
  let borderLine;
  let matrix1;
  let matrix2;
  let matrix3;
  let matrix4;
  let matrix5;
  let matrix6;
  let translatePx;
  let translatePercent;
  let scaleX;
  let scaleY;
  let skewX;
  let skewY;

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
    shadowX = dropShadow[0];
    shadowY = dropShadow[1];
    shadowSize = dropShadow[2];
    shadowColor = dropShadow[3];
  }

  function matrixImg(matrix){
    matrix = matrix.split(",");
    matrix1 = matrix[0];
    matrix2 = matrix[1];
    matrix3 = matrix[2];
    matrix4 = matrix[3];
    matrix5 = matrix[4];
    matrix6 = matrix[5];
  }

  function translateImg(translate){
    translate = translate.split(",");
    translatePx = translate[0];
    translatePercent = translate[1];
  }

  function scaleImg(scale){
    scale = scale.split(",");
    scaleX = scale[0];
    scaleY = scale[1];
  }

  function skewImg(skew){
    skew = skew.split(",");
    skewX = skew[0];
    skewY = skew[1];
  }

  function convertedImg(imgName, quality, originalImageType){
    fetch('/api/convert', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json' 
         },
        body: JSON.stringify({
          imageName: imgName,
          quality: quality,
          originalImageType: originalImageType
        })
    })
    .then(
      console.log("conversion success")
    )
    .catch(
      console.log('in catch block')
    )
  }

  ////////////////////* convert image functions invoked */////////////////////
  // resize
  const createImg = resizeFunc(resize, source);
  // rotate
  const rotatedImg = rotateImg(rotation);
  // shadow
  const sdwImg = shadowImg(dropShadow);
  // border
  const borderImg = borderImage(border);
  // matrix
  const matrixImage = matrixImg(matrix);
  // translate
  const translateImage = translateImg(translate);
  // scale
  const scaleImage = scaleImg(scale);
  // skew
  const skewImage = skewImg(skew);


  ////////////////////* import all images in optimized folder */////////////////////
  function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));

  ////////////////////* Render the modifed image component */////////////////////
  return (
    <div>
      {createImg}
      {rotatedImg}
      {sdwImg}
      {borderImg}
      {matrixImage}
      {translateImage}
      {scaleImage}
      {skewImage}
      {images[`${imgName}.webp`] ? <Img src={[images[`${imgName}.webp`], '/img/placeholder.webp']} style={{filter:`grayscale(${grayscale}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%) invert(${invert}%) saturate(${saturate}%) opacity(${opacity}%) hue-rotate(${hueRotate}deg) drop-shadow(${shadowX}px ${shadowY}px ${shadowSize}px ${shadowColor})`, transform: `matrix(${matrix1}, ${matrix2}, ${matrix3}, ${matrix4}, ${matrix5}, ${matrix6}) translate(${translatePx}px, ${translatePercent}%) scale(${scaleX}, ${scaleY}) skew(${skewX}deg, ${skewY}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(${perspective}px) rotate(${rotationDegree}deg)`, width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`, borderRadius: `${roundCorners}px`, border: `${borderThick}px ${borderLine} ${borderColor}`}} alt="image failed to load"/> : convertedImg(imgName, quality, originalImageType) }
      
    </div>
  );
}
