import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import Particles from 'react-particles-js';

class LandingPage extends Component {
  render() {
    return (
      <div id='landingPage'>

        <Parallax
          offsetYMin={0}
          offsetYMax={0}
          slowerScrollRate
        >
          <div>
            <img src='../jonatan-pie-367745.jpg' alt='background' id='landingPhoto'/>
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
        <div id='textbox-white'>
          <div id='textbox__title--white'>
            <Parallax
              offsetYMin={'-100px'}
              offsetYMax={'500px'}
              >
              Achieving <span id='purposeLed'>Purpose-Led</span> Innovation
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

        <div className='companyLogo'>
          <Parallax
            offsetYMin={-200}
            offsetYMax={100}
            slowerScrollRate
          >
            Logo 1
          </Parallax>
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 10
              },
              size: {
                value: 0
              },
              line_linked: {
                color: "#E24498",
                width: 1,
                distance: 800,
                opacity: 1
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }
          }}
          style={{
            position: "absolute",
            zIndex: 0
          }}
        />
      </div>
    );
  }
}

export default LandingPage;
