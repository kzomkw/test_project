import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBox from './textbox'

class DemosAndWorkshops extends Component {
  render() {
    return (

        <div className='demosandworkshops'>

          <div className='demosandworkshops--element'>
            <TextBox title='Product Demo Space'/>
          </div>

          <div className='demosandworkshops--element'>
            <TextBox title='Innovation Spirit'/>
          </div>

          <div className='demosandworkshops--element'>
            <TextBox title='One On Ones'/>
          </div>

        </div>
    );
  }
}

export default DemosAndWorkshops;
