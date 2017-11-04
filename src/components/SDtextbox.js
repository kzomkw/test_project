import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'



class TextBox extends Component {

  render() {
    return (

        <div className='SDtextbox'>
          <div className='SDtextbox__title'>
              {this.props.title}
          </div>

          <div className='SDtextbox__subheading'>
              {this.props.text}
          </div>
        </div>
    );
  }
}

export default TextBox;
