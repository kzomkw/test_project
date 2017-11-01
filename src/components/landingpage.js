import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBox from './textbox'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <TextBox />
        <div className='companyLogo'>
          <Parallax
            // className="custom-class"
            offsetYMin={-200}
            offsetYMax={200}
            tag="figure"
          >

            Logo 1
          </Parallax>
        </div>

        <div id='landingBackground' >
          <Parallax
            // className="custom-class"
            slowerScrollRate
            // offsetYMin={-40}
            // offsetYMax={40}
            tag="figure"
          >
              <img src='jonatan-pie-367745.jpg' className='backgroundimg' />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default LandingPage;
