import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'

import TextBox from './textbox'

class Speakers extends Component {
  //
  // handleScroll = function(event) {
  //   console.log(window.scrollY);
  //   if (window.scrollY < 2400) {
  //     document.getElementById('bowie').className = 'portrait--before'
  //   } else if (window.scrollY > 2400 && window.scrollY < 2700) {
  //     var leftMargin = ((-2/3*window.scrollY) + 1823)
  //     console.log(leftMargin);
  //     document.getElementById('bowie').style.marginLeft = `${leftMargin}`
  //     document.getElementById('bowie').style.marginTop = '(246/300*window.scrollY)'
  //   } else if (window.scrollY > 2700 ) {
  //     document.getElementById('bowie').className = 'portrait'
  //   }
  // }
  //
  // componentDidMount = function() {
  //   console.log('componentDidMount invoked');
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // componentWillUnmount = function() {
  //   console.log('componentWillUnmount invoked');
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    return (

      <div className='speakersPage'>

        <div id='speakers'>
          SPEAKERS
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={0}
              offsetXMax={-40.5}
            >
              <img className='portrait' src='./bowie.jpg' id='bowie'/>
            </Parallax>
              <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={-50}
              offsetXMax={5.5}
            >
              <img className='portrait--left' src='./bowie.jpg' />
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>

          <span className='rightSpeaker'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-43}
            >
              <img className='portrait--right' src='./bowie.jpg' />
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={0}
              offsetXMax={-40.5}
            >
              <img className='portrait' src='./bowie.jpg' id='bowie'/>
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={-50}
              offsetXMax={5.5}
            >
              <img className='portrait--left' src='./bowie.jpg' />
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>

          <span className='rightSpeaker'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-43}
            >
              <img className='portrait--right' src='./bowie.jpg' />
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={0}
              offsetXMax={-40.5}
            >
              <img className='portrait' src='./bowie.jpg' id='bowie'/>
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={-50}
              offsetXMax={5.5}
            >
              <img className='portrait--left' src='./bowie.jpg' />
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>

          <span className='rightSpeaker'>
            <Parallax
              offsetXMin={0}
              offsetXMax={-43}
            >
              <img className='portrait--right' src='./bowie.jpg' />
            </Parallax>
            <TextBox title='Person Name' text='Lorem ipsum dolor sit amet, consectetur adipiscing.'/>
          </span>
        </div>
      </div>

    );
  }
}

export default Speakers;
