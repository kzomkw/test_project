import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'

class LandingPage extends Component {
  render() {
    return (
      <div id='landingPage'>

          <div>
            {window.matchMedia("(max-width: 768px)").matches &&
            <div>
              <img src='../landing_still.jpg' alt='background' id='landingPhoto--ipad'/>
            </div>
            }
            {window.matchMedia("(min-width: 769px)").matches &&
            <video id='landingPhoto' loop autoPlay>
              <source src='../GettyImages-471736934_6MBs.mp4' type="video/mp4" />
            </video>
            }
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
            offsetYMin={-190}
            offsetYMax={250}
            >
            Achieving <div className='purposeLed'>Purpose-Led</div> <div className='titleInnovation'>Innovation</div>
          </Parallax>
          }
          {window.matchMedia("(min-height: 600px) and (max-height: 900px)").matches &&
          <Parallax
            offsetYMin={-110}
            offsetYMax={250}
            >
            Achieving <div className='purposeLed'>Purpose-Led</div> <div className='titleInnovation'>Innovation</div>
          </Parallax>
          }
          {window.matchMedia("(min-height: 900px)").matches &&
            <Parallax
              offsetYMin={-80}
              offsetYMax={250}
              >
              Achieving <div className='purposeLed'>Purpose-Led</div> <div className='titleInnovation'>Innovation</div>
            </Parallax>
          }

          </div>
        </div>
        {window.matchMedia("(min-width: 769px)").matches &&
          <ParticlesComponent />
        }
        </div>
    );
  }
}

export default LandingPage;
