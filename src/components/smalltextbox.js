import React, { Component } from 'react';

class SmallTextBox extends Component {

  render() {
    return (

        <div className='smalltextbox' id={this.props.boxid}>
          <div className='smalltextbox__title'>
              {this.props.title}
          </div>

          <div className='smalltextbox__subheading'>
              {this.props.text}
          </div>
        </div>
    );
  }
}

export default SmallTextBox;
