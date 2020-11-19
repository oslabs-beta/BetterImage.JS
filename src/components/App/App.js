import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';
import bigJPGImage from './images/bigJPG.jpg'
import bigPNGImage from './images/bigPNG.png'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      once: false,
    }
    this.updateOnce = this.updateOnce.bind(this);
  }

  updateOnce(){
    this.setState({once: true});
  }

  render() { 
    return (
      <div>
        <BetterImage
          source={bigPNGImage}
          resize={'200x200'}
          format={'webp'}
          quality={'10'}
          instance={this.state.once}
          instanceFunc={this.updateOnce}
        />
      </div>
    );
  }
}

export default App;
