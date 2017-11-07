import React, { Component } from 'react';

class TextBox extends Component {

  render() {
    return (

        <div className='textbox' id={this.props.boxid}>
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
