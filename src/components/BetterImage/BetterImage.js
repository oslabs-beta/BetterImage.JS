import React from 'react';


export default class BetterImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resize: this.props.resize,
      source: this.props.source,
      format: this.props.format,
    }
    this.importAll = this.importAll.bind(this);
    this.convertedImg = this.convertedImg.bind(this);
    this.extractName = this.extractName.bind(this);
  }


  ///////////////////////////* Hoisted Variables */////////////////////////////
  // let resizedImageWidth;
  // let resizedImageHeight;

  /////////////////////////* Image Resize Functionality *////////////////////////
  //  resizeFunc(string) {
  //   let foundX = false;
  //   let num1 = '';
  //   let num2 = '';

  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] !== 'x' && foundX === false) {
  //       num1 = num1.concat(string[i]);
  //     } else if (string[i] === 'x') {
  //       foundX = true;
  //     } else if (string[i] !== 'x' && foundX === true) {
  //       num2 = num2.concat(string[i]);
  //     }
  //   }
  //   resizedImageHeight = Number(num1);
  //   resizedImageWidth = Number(num2);

  //   return;
  // }
  
  
  ////////////////* Convert Image Format to WEBP Functionality */////////////////
   convertedImg(source){
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

  ////////////////////* import all images in optimized folder */////////////////////
   importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // custom reverse function
   reverse(s){
    return s.split("").reverse().join("");
  };
  // if regex possible, find one
   extractName(string){
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

  // let imgName = extractName(source);

  ////////////////////* Chaining the APIs Together */////////////////////
  // switch statement
  componentDidMount(){
    {this.convertedImg(this.state.source)}
  }

  render(){
    ////////////////////* Render the modifed image component */////////////////////
    return (
      <div>
        {/* {resizeFunc(resize, source)} */}
        <img src={this.importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/))[`${this.extractName(this.state.source)}.webp`]}  />
        {/* style={{width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`}} */}
      </div>
    );

  }

}
