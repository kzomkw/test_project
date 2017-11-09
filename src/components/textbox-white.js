import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'



class TextBoxWhite extends Component {

  render() {
    return (
        <div className='textbox-white'>
          <div className='textbox__title--white'>
          {window.matchMedia("(min-height: 600px) and (max-height: 800px)").matches &&
            <Parallax
              offsetYMin={-200}
              offsetYMax={200}
              >
              {this.props.title}
            </Parallax>
          }
          {window.matchMedia("(max-height: 600px)").matches &&
            <Parallax
              offsetYMin={-200}
              offsetYMax={200}
              >
              {this.props.title}
            </Parallax>
          }
          {window.matchMedia("(min-height: 800px)").matches &&
            <Parallax
              offsetYMin={-400}
              offsetYMax={400}
              >
              {this.props.title}
            </Parallax>
          }
          </div>
          <div className='textbox__subheading--white'>
            <Parallax
              offsetYMin={-200}
              offsetYMax={200}
            >
              {this.props.text}
            </Parallax>
          </div>
        </div>
    );
  }
}

export default TextBoxWhite;
