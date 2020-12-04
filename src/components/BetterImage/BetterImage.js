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
  importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  fetchData() {
    if(this.state.fetched === false ){
      console.log("fetching....")
      fetch('/api/convert', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json' 
           },
          body: JSON.stringify({
            imageName: this.state.imageName,
            quality: this.state.quality,
          })
      }).then((data) => {
        let result = data.json();
        console.log("data status from backend", data["ok"])
        if(data["ok"] === true && this.state.dataOk === false) {
          this.setState( { ...this.state, dataOk: true, fetched: true}, () => {console.log("fetched is true")})
        }
      })
      .catch(
        console.log("we are in catch")
      )
    }
    else{
      console.log("I'm out of fetch")
    }
  }
  
  render(){
    let sourceRoutePath = this.importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));
    let sourceRoute = sourceRoutePath[[`${(this.state.imageName)}.webp`]];
    let defaultImage = sourceRoutePath["default.png"];
    // console.log("default Image", defaultImage.default)

    // {console.log("rendered", this.state.fetched)}
    // {console.log("source", this.state.source)}

    return (
      <section>
        { sourceRoute && this.state.dataOk === false ? <RenderedImage sourceRoute={sourceRoute} defaultImage={defaultImage} /> : this.fetchData()  }
      </section>
    );
  }
}
