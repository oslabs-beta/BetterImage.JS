import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import img1 from './images/avocado.png';
import img2 from './images/cat.png';
import img3 from './images/colors.png';
import img4 from './images/diamond.png';
import img5 from './images/gradient.png';
import img6 from './images/image.png';
import img7 from './images/light.png';
import img9 from './images/rock.png';
import img10 from './images/us.png';
import img11 from './images/veg.png';

class App extends Component {
  render() { 
    return (
      <div>
        {/* sample original image rendering here */}
          <h1> Original Image </h1>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            {/* <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img9} />
            <img src={img10} />
            <img src={img11} /> */}

        {/* betterimage rendering here */}
          <h1> BetterImage</h1> 
          <BetterImage
            source={img1}
            quality={'80'}
            resize={'600x800'}
          />
          <BetterImage
            source={img2}
            quality={'80'}
            resize={'1200x800'}
          />
          <BetterImage
            source={img3}
            quality={'80'}
            resize={'600x800'} 
          />
          {/* <BetterImage
            source={img4}
            quality={'80'}
            resize={'600x800'}
          />
          <BetterImage
            source={img5}
            quality={'80'}
            resize={'600x800'} 
          />
          <BetterImage
            source={img6}
            quality={'80'}
            resize={'1200x800'}
          />
          <BetterImage
            source={img7}
            quality={'80'}
            resize={'600x800'}
          />
          <BetterImage
            source={img9}
            quality={'80'}
            resize={'600x800'}
          />
          <BetterImage
            source={img10}
            quality={'80'}
            resize={'600x800'}
          />
          <BetterImage
            source={img11}
            quality={'80'}
            resize={'600x800'}
          /> */}
      </div>
    );
  }
}

export default App;
