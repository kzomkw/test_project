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
                <a href='https://www.google.com/maps/place/The+Prado+at+Balboa+Park/@32.7310106,-117.1519294,17z/data=!3m1!4b1!4m5!3m4!1s0x80d954bd88e868f9:0xe3785d326e563046!8m2!3d32.7310061!4d-117.1497354'>
                  <img src='./map-get.png' id='mapMarker'/>
                </a>
                <div id='date'>
                  DEC
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
              <a href='https://www.google.com/maps/place/The+Prado+at+Balboa+Park/@32.7310106,-117.1519294,17z/data=!3m1!4b1!4m5!3m4!1s0x80d954bd88e868f9:0xe3785d326e563046!8m2!3d32.7310061!4d-117.1497354'>
                <img src='./map-get.png' id='mapMarker'/>
              </a>
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
