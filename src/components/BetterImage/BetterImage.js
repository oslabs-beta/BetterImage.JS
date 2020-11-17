import React from 'react';

//props we get from App.js

export default function BetterImage(props) {
  const { resize, source } = props;

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

  const createImg = resizeFunc(resize, source);

  return <div>{createImg}</div>;
}
