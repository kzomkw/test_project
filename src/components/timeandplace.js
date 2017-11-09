import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import SDTextBox from './SDtextbox'

class TimeAndPlace extends Component {
  render() {
    return (

        <div className='timeAndPlaceContainer'>

          <div id='mirumopusHashtag'>
            #mirumopus
          </div>

          <div id='timeandplace_heading'>
            TIME AND PLACE
          </div>
          {window.matchMedia("(min-width: 700px)").matches &&
            <ParticlesComponent />
          }
          <Parallax
          offsetYMin={0}
          offsetYMax={20}
          >
            <div id='eventTextBox'>
              <SDTextBox title='San Diego' text='The Prado Balboa Park'/>
            </div>
          </Parallax>
          {window.matchMedia("(min-width: 700px)").matches &&
            <Parallax
              offsetYMin={-400}
              offsetYMax={50}
            >
              <div id='datetime'>
                <img src='./marker.png' id='mapMarker'/>
                <div id='date'>
                  Dec
                  <div id='day'>
                    13
                  </div>
                </div>
                <div id='time'>
                  <div id='starting-time'>9AM</div><div id='ending-time'>6PM</div>
                </div>
              </div>
            </Parallax>
          }
          {window.matchMedia("(max-width: 700px)").matches &&
            <div id='datetime--mobile'>
              <img src='./marker.png' id='mapMarker'/>
              <span>
                <div id='date'>
                  Dec
                  <div id='day'>
                    13
                  </div>
                </div>
              </span>
                <span id='time'>
                  <div id='starting-time'>9AM</div><div id='ending-time'>6PM</div>
                </span>

            </div>
          }

        </div>
    );
  }
}

export default TimeAndPlace;
