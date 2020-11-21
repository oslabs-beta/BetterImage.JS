import React from 'react';

export default class BetterImage extends React.Component {

  render(){
    {console.log("child rendered source", this.props.sourceRoute)}
    {console.log("child rendered alt", this.props.defaultImage.default)}
    return(
      <div>
        {/* {resizeFunc(resize, source)} */}
          <img src={this.props.sourceRoute} onerror={this.src = this.props.defaultImage.default} />
        {/* style={{width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`}} */}
      </div>
    )
  }
    
}



