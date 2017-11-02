import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'



class TextBox extends Component {

  render() {
    return (

        <div className='textbox'>
          <div className='textbox__title'>
            {/*<Parallax
              offsetYMin={-200}
              offsetYMax={300}
              >*/}
              {this.props.title}
            {/*</Parallax>*/}
          </div>
          <div className='textbox__subheading'>
            {/*<Parallax
              offsetYMin={-200}
              offsetYMax={300}
            >*/}
              {this.props.text}
            {/*</Parallax>*/}
          </div>
        </div>
    );
  }
}

export default TextBox;
