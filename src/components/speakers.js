import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBox from './textbox'

class Speakers extends Component {
  render() {
    return (

        <div className='speakersPage'>

          <div className='middleSpeaker'>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </div>

          <div>
            <span className='leftSpeaker'>
              <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            </span>
            <span className='rightSpeaker'>
              <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            </span>
          </div>
          <div className='middleSpeaker'>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </div>

          <div className='leftSpeaker'>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </div>

          <div className='rightSpeaker'>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </div>

        </div>
    );
  }
}

export default Speakers;
