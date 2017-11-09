import React, { Component } from 'react';
import ParticlesComponent from './particles'

class LandingPageMobile extends Component {
  render() {
    return (
      <div id='landingPage--mobile'>

        <div>
          <img src='../jonatan-pie-367745.jpg' alt='background' id='landingPhoto'/>
        </div>

        <div>
          <img src='../mirum-opus.png'  id='landingMirumOpusLogo--mobile' alt='opus logo'/>
        </div>

        <div id='textbox-white--mobile'>
          <div id='textbox__title--white--mobile'>
            Achieving <div className='purposeLed'>Purpose-Led</div> Innovation
          </div>
          <div id='textbox__subheading--white--mobile'>
            A New Purpose For Brands
          </div>
        </div>

        <div id='presentedBy--mobile'>
          <div id='presentedBy--text--mobile'>
            Presented in association with our partners
          </div>
          <div id='presentedBy--logo1--mobile'>
            <img src='../jwt-sig.png'/>
          </div>
          <div id='presentedBy--logo2--mobile'>
            <img src='../acquia.png'/>
          </div>
        </div>

      </div>
    );
  }
}

export default LandingPageMobile;
