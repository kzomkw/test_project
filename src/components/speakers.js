import React, { Component } from 'react';
import TextBox from './textbox'

class Speakers extends Component {
  render() {
    return (
      <div>
        <TextBox />

        <div id='landingBackground' >
          <img src='tom-barrett-318952.jpg' className='backgroundimg' />
        </div>

      </div>
    );
  }
}

export default Speakers;
