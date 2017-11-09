import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import TextBox from './textbox'
import TwoSpeakersTB from './twospeakerstb'

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
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait bottom' src='./Tony.png'/>
              <img className='portrait top' src='./TonyBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' />
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
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./Bree.png' />
              <img className='portrait--left top' src='./BreeBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
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
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./Brett.png' />
              <img className='portrait--right top' src='./BrettBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
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
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./Tamara.png' id='bowie'/>
              <img className='portrait top' src='./TamaraBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' />
            <TextBox title='Tamara Ingram' text='CEO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Fireside Chat
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
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./Emily.png' />
              <img className='portrait--left top' src='./EmilyBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Emily Musil Church' text='Director of Education and Impact XPRIZE Learning'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Shooting For The Stars
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./Mark.png' />
              <img className='portrait--right top' src='./MarkBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Mark Lovett' text='Organizer, TEDX San Diego'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Storylistening as an Agent of (R)evolution
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./Matt.png' id='bowie'/>
              <img className='portrait top' src='./MattBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' />
            <TextBox title='Matt Webb' text='Global CTO Mirum'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Workshop
              </p>
              <p className='keynoteDescription'>
                How to build a Maker Business
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./Lucie.png' />
              <img className='portrait--left top' src='./LucieBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Lucie Greene' text='Worldwide Director of J. Walter Thompson Intelligence'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                How to be a Future-Focused Brand
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./JamieBW.png' />
              <img className='portrait--right top' src='./JamieBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Jamie McLellan' text='CTO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Solving Human Problems with AI
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./Lynne-Chris.png' id='bowie'/>
              <img className='portrait top' src='./Lynne-ChrisBW.png'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle2' />
            <TwoSpeakersTB title1='Lynne Capozzi' text1='CMO, Acquia' title2='Chris Stone' text2='CPO, Acquia'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                She Said, He Said: How Product & Marketing Can See Eye to Eye on the Customer Journey
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
