import React, { Component } from 'react';

class LandingPageMobile extends Component {
  render() {
    return (
      <div id='landingPage--mobile'>

        <div>
          <img src='../landing_still.jpg' alt='background' id='landingPhoto--mobile'/>
        </div>

        <div>
          <img src='../mirumopuslogo.png'  id='landingMirumOpusLogo--mobile' alt='opus logo'/>
        </div>

        <div id='textbox-white--mobile'>
          <div id='textbox__title--white--mobile'>
            Achieving <div className='purposeLed--mobile'>Purpose-Led</div> <div className='titleInnovation--mobile'>Innovation</div>
          </div>
        </div>

        <div id='presentedBy--mobile'>
          <div id='presentedBy--text--mobile'>
            Presented in association with our partners
          </div>
          <div >
            <img src='../jwt-sig.png' id='presentedBy--logo1--mobile'/>
          </div>
          <div classname='presentedby--mobile-logos'>
            <img src='../acquia.png' id='presentedBy--logo2--mobile'/>
            <img src='../lingotek_logo_white.png' id='presentedBy--logo3--mobile'/>
          </div>
        </div>

      </div>
    );
  }
}

export default LandingPageMobile;
