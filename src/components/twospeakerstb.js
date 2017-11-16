import React, { Component } from 'react';

class TwoSpeakersTB extends Component {

  render() {
    return (

        <div className='textbox_twospeakers' >
          <div className='textbox2__title1'>
              {this.props.title1}
          </div>

          <div className='textbox2__subheading1'>
              {this.props.text1}
          </div>

          <div className='textbox2__title2'>
              {this.props.title2}
          </div>

          <div className='textbox2__subheading2'>
              {this.props.text2}
          </div>
        </div>
    );
  }
}

export default TwoSpeakersTB;
