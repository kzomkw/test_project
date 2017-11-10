import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import TextBox from './textbox'
import TwoSpeakersTB from './twospeakerstb'
import MattTB from './matttb'

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
              <img className='portrait bottom' src='./TonyC.jpg'/>
              <img className='portrait top' src='./TonyBW.jpg'/>
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
              <img className='portrait--left' src='./BreeC.jpg' />
              <img className='portrait--left top' src='./BreeBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <MattTB firstname='Bree' lastname='Groff' text='CEO of NOBL'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                Underwear, Clocks, and Companies: <br/> How to Change When You Must
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./BrettC.jpg' />
              <img className='portrait--right top' src='./BrettBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <MattTB firstname='Brett' lastname='Hurt' text='CEO & Co-founder of data.world, Founder of Coremetrics and Bazaarvoice'/>
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
              <img className='portrait' src='./TamaraC.jpg'/>
              <img className='portrait top' src='./TamaraBW.jpg'/>
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
              <img className='portrait--left' src='./EmilyC.jpg' />
              <img className='portrait--left top' src='./EmilyBW.jpg'/>
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
              <img className='portrait--right' src='./MarkC.jpg' />
              <img className='portrait--right top' src='./MarkBW.jpg'/>
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
              <img className='portrait' src='./MattC.jpg'/>
              <img className='portrait top' src='./MattBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' />
            <MattTB firstname='Matt' lastname='Webb' text='Global CTO Mirum'/>
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
              <img className='portrait--left' src='./LucieC.jpg' />
              <img className='portrait--left top' src='./LucieBW.jpg'/>
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
              <img className='portrait--right' src='./JamieC.jpg' />
              <img className='portrait--right top' src='./JamieBW.jpg'/>
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
              <img className='portrait-last' src='./Acquia.jpg'/>
              <img className='portrait-last top' src='./AcquiaBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle2' />
            <TwoSpeakersTB title1='Lynne Capozzi' text1='CMO, Acquia' title2='Chris Stone' text2='CPO, Acquia'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                The Right Stuff: What It Takes to Align Product and Marketing
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
