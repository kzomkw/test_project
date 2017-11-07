import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'

class LandingPage extends Component {
  render() {
    return (
      <div id='landingPage'>

          <div>
            <img src='../jonatan-pie-367745.jpg' alt='background' id='landingPhoto'/>
          </div>

        <div className='landingMirumOpusLogo'>
          <Parallax
            offsetYMin={-200}
            offsetYMax={100}
            slowerScrollRate
          >
            Logo 1
          </Parallax>
        </div>

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

        <div id='textbox-white'>
          <div id='textbox__title--white'>
            <Parallax
              offsetYMin={0}
              offsetYMax={200}
              >
              Achieving <div className='purposeLed'>Purpose-Led</div> Innovation
            </Parallax>
          </div>
          <div id='textbox__subheading--white'>
            <Parallax
              offsetYMin={-200}
              offsetYMax={200}
            >
                A New Purpose For Brands
            </Parallax>
          </div>
        </div>
        {window.matchMedia("(min-width: 700px)").matches &&
          <ParticlesComponent />
        }

      </div>
    );
  }
}

export default LandingPage;
