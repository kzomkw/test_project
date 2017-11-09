import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import SDTextBox from './SDtextbox'

class About extends Component {
  render() {
    return (
        <div className='about'>
          <Parallax
          offsetYMin={0}
          offsetYMax={50}
          >
            <div id='photoAndParagraph'>
              <img src='../GettyImages-539144571.jpg' id='detailsPhoto'/>
              <div id='mission'>
                <div>
                  Brands today have a bigger mission than selling products.
                </div>
                <div> <br/> </div>
                <div>
                  They must also contribute to human progress.
                </div>
              </div>
              <p className='titleText'>
                How is this possible?
              </p>
              <p className='descriptionParagraph'>
                By embracing purpose-led innovation, businesses position themselves to stay relevant and grow in the activist economy, where consumers, employees and the media can quickly express dissent.
              </p>
              <p className='descriptionParagraph'>
                At Mirum Opus, our speakers will share the knowledge and tools to help brands succeed. Topics covered will include Conscious Capitalism, Future-focused Leadership, Using AI to Solve Human Problems, Designing Teams That Innovate and Making Profits With Purpose.
              </p>
              <p className='descriptionParagraph'>
                While Opus attendees digest knowledge shared by our speakers, a team of Mirum specialists will be working alongside a client team to solve their most pressing challenge in a day-long innovation workshop.
              </p>
            </div>

            <div id='videoIntro'>
              <div>
                See highlights from our last Mirum Opus innovation sprint here:
              </div>
            </div>

            <div id='video'>
              <iframe src="https://player.vimeo.com/video/204015105" width='100%' height='100%' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </Parallax>
        </div>
    );
  }
}

export default About;
