import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import TextBox from './textbox'

class Speakers extends Component {
  render() {
    return (

      <div className='speakersPage'>

        <div id='speakers'>
          SPEAKERS
        </div>

        {window.matchMedia("(min-width: 700px)").matches &&
          <ParticlesComponent />
        }
        
        <div className='middleSpeaker'>
          <span>

            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait bottom' src='./bowie.jpg'/>
              <img className='portrait top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Tony Markovski' text='Head of Innovation and Emerging Technology'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
            offsetXMin={0}
            offsetXMax={-10}
            >
              <img className='portrait--left' src='./bowie.jpg' />
              <img className='portrait--left top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Bree Groff' text='CEO of NOBL'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                Underwear, Clocks, and Companies: How to Change When You Must
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait--right' src='./bowie.jpg' />
              <img className='portrait--right top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Brett Hurt' text='CEO & Founder of data.world, Founder of Coremetrics and Bazaarvoice'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                The Secrets of Making Profits with Purpose
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait' src='./bowie.jpg' id='bowie'/>
              <img className='portrait top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Tamara Ingram' text='CEO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                Innovating Like a Bull in a China Shop
              </p>
            </div>
          </span>
        </div>

        {window.matchMedia("(min-width: 700px)").matches &&
          <ParticlesComponent />
        }

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait--left' src='./bowie.jpg' />
              <img className='portrait--left top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait--right' src='./bowie.jpg' />
              <img className='portrait--right top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait' src='./bowie.jpg' id='bowie'/>
              <img className='portrait top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait--left' src='./bowie.jpg' />
              <img className='portrait--left top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-10}
            >
              <img className='portrait--right' src='./bowie.jpg' />
              <img className='portrait--right top' src='./bowieBW.jpg'/>
            </Parallax>
            <img src='./pink-plus-sign.png' className='plus' />
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>
        </div>
        <Parallax
          slowerScrollRate
        >
        </Parallax>
      </div>

    );
  }
}

export default Speakers;
