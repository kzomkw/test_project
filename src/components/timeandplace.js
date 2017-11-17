import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import SDTextBox from './SDtextbox'

class TimeAndPlace extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    if (window.matchMedia("(min-width: 700px) and (max-width:769px)").matches){
      if (window.scrollY < 400) {
        document.querySelector('.SDtextbox').style.background = 'rgba(255,255,255, 0)'
      } else {
        document.querySelector('.SDtextbox').style.background = 'rgba(255,255,255, 0.5)'
      }
    } else if (window.matchMedia("(min-width: 769px) and (max-width:1825px)").matches){
      if (window.scrollY < 770) {
        document.querySelector('.SDtextbox').style.background = 'rgba(255,255,255, 0)'
      } else {
        document.querySelector('.SDtextbox').style.background = 'rgba(255,255,255, 0.5)'
      }
    } else if (window.matchMedia("(min-width: 1825px)").matches){
      if (window.scrollY < 500) {
        document.querySelector('.SDtextbox').style.background = 'rgba(255,255,255, 0)'
      } else {
        document.querySelector('.SDtextbox').style.background = 'rgba(255,255,255, 0.5)'
      }
    }
  };

  render() {
    return (

        <div className='timeAndPlaceContainer'>

          <div id='mirumopusHashtag'>
            #mirumopus
          </div>

          <div id='timeandplace_heading'>
            TIME AND PLACE
          </div>
          {window.matchMedia("(min-width: 769px)").matches &&
            <ParticlesComponent />
          }
          {window.matchMedia("(min-width: 700px)").matches &&
            <div id='eventTextBox'>
              <SDTextBox title='San Diego' text='The Prado Balboa Park'/>
            </div>
          }
          {window.matchMedia("(max-width: 700px)").matches &&
          <Parallax
          offsetYMin={0}
          offsetYMax={20}
          >
            <div id='eventTextBox'>
              <SDTextBox title='San Diego' text='The Prado Balboa Park'/>
            </div>
          </Parallax>
          }
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
