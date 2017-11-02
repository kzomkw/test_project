import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBoxWhite from './textbox-white'

class LandingPage extends Component {
  render() {
    return (
      <div id='landingPage'>
        <Parallax
          offsetXMin={0}
          offsetXMax={20}
          slowerScrollRate
        >
          <div>
            <img src='../jonatan-pie-367745.jpg' alt='background photo' id='landingPhoto'/>
          </div>
        </Parallax>
        <div id='presentedBy'>
          <span id='presentedBy--text'>
            Presented in association with our partners
          </span>
          <span id='presentedBy--logo1'>
            JWT Logo
          </span>
          <span id='presentedBy--logo2'>
            Acquia Logo
          </span>
        </div>

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
            offsetXMin={-172}
            offsetXMax={200}
          >
            BRANDS
          </Parallax>
        </div>

      </div>
    );
  }
}

export default LandingPage;
