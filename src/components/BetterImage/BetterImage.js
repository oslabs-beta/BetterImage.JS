import React from 'react';
import webp from 'webp-converter';

export default function BetterImage(props) {
  const { resize, source, format } = props;

  // Image Resize
  function resizeFunc(string, source) {
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
    num1 = Number(num1);
    num2 = Number(num2);

    let newImg = (
      <img src={source} alt='test' style={{ height: num1, width: num2 }}></img>
    );            

    return newImg;
  }
  
  // Convert Image Format 
  function convertedImg(source){
    console.log(source)
    fetch('/api/convert', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json' 
         },
        body: JSON.stringify({image: source})
    })
  }

  const convert = convertedImg(source)
  const createImg = resizeFunc(resize, source);
  // const convertImg = formatFunc(format);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));

// render 
return (
   
 <div>
  {convert}
  {console.log(images)}
  <img src={images['bestPhotoEver.webp'].default}/>
 </div>
);

}
