import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'

class LandingPage extends Component {
  render() {
    return (
      <div id='landingPage'>

          <div>
            <img src='../landing_still_full.png' alt='background' id='landingPhoto'/>
          </div>

        <div id='presentedBy'>
          <span id='presentedBy--text'>
            Presented in association with our partners
          </span>
          {window.matchMedia("(min-width: 700px)").matches &&
            <span id='presentedBy--logo1'>
              <img src='../jwt-sig.png'/>
            </span>
          }
          {window.matchMedia("(max-width: 700px)").matches &&
            <span id='presentedBy--logo1'>
              <img src='../jwt-sig.png'/>
            </span>
          }
          <span id='presentedBy--logo2'>
            <img src='../acquia.png'/>
          </span>
          <span id='presentedBy--logo3'>
            <img id='lingotek_logo' src='../lingotek_logo_white.png'/>
          </span>
        </div>


        <div>
          <img src='../mirumopuslogo.png'  id='landingMirumOpusLogo' alt='opus logo'/>
        </div>

        <div id='textbox-white'>
          <div id='textbox__title--white'>
          {window.matchMedia("(max-height: 600px)").matches &&
          <Parallax
            offsetYMin={-200}
            offsetYMax={250}
            >
            Achieving <div className='purposeLed'>Purpose-Led</div> Innovation
          </Parallax>
          }
          {window.matchMedia("(min-height: 600px) and (max-height: 900px)").matches &&
          <Parallax
            offsetYMin={-120}
            offsetYMax={250}
            >
            Achieving <div className='purposeLed'>Purpose-Led</div> Innovation
          </Parallax>
          }
          {window.matchMedia("(min-height: 900px)").matches &&
            <Parallax
              offsetYMin={-80}
              offsetYMax={250}
              >
              Achieving <div className='purposeLed'>Purpose-Led</div> Innovation
            </Parallax>
          }

          </div>
          <div id='textbox__subheading--white'>
            {window.matchMedia("(max-height: 900px)").matches &&
              <Parallax
                offsetYMin={-90}
                offsetYMax={350}
              >
                A New Purpose For Brands
              </Parallax>
            }
            {window.matchMedia("(min-height: 1000px)").matches &&
              <Parallax
                offsetYMin={30}
                offsetYMax={250}
                >
                A New Purpose For Brands
              </Parallax>
            }
          </div>
        </div>
        <ParticlesComponent />
      </div>
    );
  }
}

export default LandingPage;
