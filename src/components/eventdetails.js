import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBox from './textbox'

class EventDetails extends Component {
  render() {
    return (
      <div>

        <div className='eventDetails'>
        <div id='getTickets'>
        </div>
          <div id='eventTextBox'>
            <TextBox title='San Diego' text='The Prado Balboa Park'/>
          </div>

          <Parallax
            offsetYMin={-400}
            offsetYMax={0}
          >
            <div id='date'>
              Dec
              <div id='day'>
                13
              </div>
            </div>
            <div id='time'>
              <div id='starting-time'>9AM</div><div id='ending-time'>6PM</div>
            </div>
          </Parallax>

          <Parallax
          offsetYMin={-400}
          offsetYMax={50}
          >
            <div id='mission'>
              <div>
                Brands today have a bigger mission than selling products.
              </div>
              <div> </div>
              <div>
                They must also contribute to human progress.
              </div>
            </div>

            <div id='photoAndParagraph'>
              <img src='../stefan-stefancik-105376.jpg' id='detailsPhoto'/>
              <p className='titleText'>
                How is this possible?
              </p>
              <p className='descriptionParagraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim magna vitae nibh rhoncus ultrices. Donec ultrices, elit nec imperdiet tempus, nibh sem posuere ipsum, sed dapibus arcu felis non est. Praesent lectus ligula, ullamcorper ac urna eu, vestibulum venenatis elit. Nam mauris dolor, congue ut urna eu, fringilla rutrum orci. Maecenas a eleifend ipsum, in tempus augue. Vestibulum tempor ut enim vel aliquet. Etiam eget erat ante. Donec eget elit eu metus pellentesque posuere at vitae velit. Fusce ultrices diam nisi. Vestibulum urna arcu, hendrerit a pharetra sit amet, malesuada id metus. Nam id egestas felis, malesuada accumsan lacus. Aliquam nec suscipit mi. Ut sit amet gravida tellus.
              </p>
            </div>
          </Parallax>

        </div>
      </div>
    );
  }
}

export default EventDetails;
