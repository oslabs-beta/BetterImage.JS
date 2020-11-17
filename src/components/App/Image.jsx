import React from 'react';

function Image() {
  let newImg;

  const changeSize = (height, width, src) => {
    newImg = <img src={src} style={{ height: height, width: width }}></img>;
  };

  changeSize(100, 100, 'https://picsum.photos/200/300');

  return <div>{newImg}</div>;
}

export default Image;
