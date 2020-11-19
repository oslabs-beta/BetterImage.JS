import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("/")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
      this.callAPI();
  }

  render() { 
    return (
      <div>
        <BetterImage
          source={originalImage}
          resize={'900x1200'}
          format={'webp'}
        />
      </div>
    );
  }
}

export default App;
