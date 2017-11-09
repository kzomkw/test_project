import React, { Component } from 'react';

class TwoSpeakersTB extends Component {

  render() {
    return (

        <div className='textbox' >
          <div className='textbox1__title'>
              {this.props.title1}
          </div>

          <div className='textbox2__subheading'>
              {this.props.text1}
          </div>

          <div className='textbox2__title'>
              {this.props.title2}
          </div>

          <div className='textbox__subheading'>
              {this.props.text2}
          </div>
        </div>
    );
  }
}

export default TwoSpeakersTB;
