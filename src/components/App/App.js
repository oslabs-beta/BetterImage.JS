import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import bestPhotoEver from './images/bestPhotoEver.png';


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
    console.log(bestPhotoEver);
      this.callAPI();
  }

  render() { 
    return (
      <div>
        <BetterImage
          source={bestPhotoEver}
          resize={'500x750'}
          format={'webp'}
        />
      </div>
    );
  }
}

export default App;
