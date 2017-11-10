import React, { Component } from 'react';

class MattTB extends Component {

  render() {
    return (

        <div className='textbox' id={this.props.boxid}>
          <div className='textbox__title'>
              {this.props.firstname}
              <br/>
              {this.props.lastname}
          </div>

          <div className='textbox__subheading'>
              {this.props.text}
          </div>
        </div>
    );
  }
}

export default MattTB;
