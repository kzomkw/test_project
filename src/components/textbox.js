import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'



class TextBox extends Component {

  render() {
    return (

        <div className='textbox'>
          <div className='textbox__title'>
              {this.props.title}
          </div>

          <div className='textbox__subheading'>
              {this.props.text}
          </div>
        </div>
    );
  }
}

export default TextBox;
