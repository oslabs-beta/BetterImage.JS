import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';


class App extends Component {
  render() {
    return (
      <div>
        {/* betterimage rendering here */}
        <h1> BetterImage</h1>
        <BetterImage
          source={'./images/avocado.png'}
          quality={'80'}
          resize={'600x800'}
        />

      </div>
    );
  }
}

export default App;
