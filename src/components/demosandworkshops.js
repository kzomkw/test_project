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
                  We’ll showcase the best-in-class innovation experiences created by Mirum, J. Walter Thompson and our Opus sponsors to solve real-world problems. We’ll include prototypes and finished projects that attendees can touch, engage with and discuss with team members involved in bringing them to life.
                </p>
              </span>

              <span id='workshopElement--right'>
                <TextBox title='Innovation Spirit'/>
                <p className='workshopParagraph'>
                  Experience a live prototype solution as we collaborate with one of our clients to use digital technology to implement purpose-led innovation. Mirum Global CTO Matt Webb and Mirum North America CTO Bret Otzenberger will co-host the sprint and update their progress and outcomes throughout the day.
                </p>
              </span>
            </div>

            <div className='demosandworkshops--bottom'>
              <TextBox title='One On Ones'/>
            <p className='workshopParagraph'>
              Leaders from Mirum and J. Walter Thompson will offer 30-minute consultations to focus on specific innovation challenges facing your business and answer questions.
            </p>
            </div>
          </div>

        </div>
    );
  }
}

export default DemosAndWorkshops;
