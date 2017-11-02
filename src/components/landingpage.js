import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBoxWhite from './textbox-white'

class LandingPage extends Component {
  render() {
    return (
      <div id='landingPage'>
        <TextBoxWhite
          title='A New Purpose For'
          text='Achieving Purpose-Led Innovation'
          />
        <div className='companyLogo'>
          <Parallax
            offsetXMin={200}
            offsetXMax={-200}
          >
            Logo 1
          </Parallax>
        </div>
        <div className='companyLogo' id='logo2'>
          <Parallax
            offsetXMin={-200}
            offsetXMax={200}
          >
            Logo 2
          </Parallax>
        </div>

      </div>
    );
  }
}

export default LandingPage;
