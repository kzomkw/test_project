import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBox from './textbox'

class DemosAndWorkshops extends Component {
  render() {
    return (

        <div className='demosandworkshopsPage'>

          <div id='timeAndPlace'>
            DEMOS & WORKSHOPS
          </div>

          <div id='workshop_elements'>

            <div id='workshop_elements--inline'>
              <span id='workshopElement--left'>
                <TextBox title='Product Demo Space'/>
                <p className='workshopParagraph'>
                  By embracing purpose-led innovation, businesses position themselves to stay relevant and grow in the activist economy, where consumers, employees and the media can quickly express dissent.
                </p>
              </span>

              <span id='workshopElement--right'>
                <TextBox title='Innovation Spirit'/>
                <p className='workshopParagraph'>
                  By embracing purpose-led innovation, businesses position themselves to stay relevant and grow in the activist economy, where consumers, employees and the media can quickly express dissent.
                </p>
              </span>
            </div>

            <div className='demosandworkshops--bottom'>
              <TextBox title='One On Ones'/>
            <p className='workshopParagraph'>
              While Opus attendees digest knowledge shared by our speakers, a team of Mirum specialists will be working alongside a client team to solve their most pressing challenge in a day-long innovation workshop.
            </p>
            </div>
          </div>

        </div>
    );
  }
}

export default DemosAndWorkshops;
