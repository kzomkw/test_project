import React, { Component } from 'react';

class TextBox extends Component {

  render() {
    return (

        <div className='workshopTextbox' id={this.props.boxid}>
          <div className='workshopTextbox__title'>
              {this.props.title}
          </div>

          <div className='workshopTextbox__subheading'>
              {this.props.text}
          </div>
        </div>
    );
  }
}

export default TextBox;
