import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import SDTextBox from './SDtextbox'

class EventDetails extends Component {
  render() {
    return (
        <div className='eventDetails'>

          <div id='getTickets'>
            <a href='#' id='linkStyle'>GET TICKETS</a>
          </div>

          <div id='mirumopus'>
            #mirumopus
          </div>

          <div id='timeAndPlace'>
            TIME AND PLACE
          </div>
          {window.matchMedia("(min-width: 700px)").matches &&
            <ParticlesComponent />
          }
          <Parallax
          offsetYMin={-20}
          offsetYMax={100}
          >
            <div id='eventTextBox'>
              <SDTextBox title='San Diego' text='The Prado Balboa Park'/>
            </div>
          </Parallax>

          <Parallax
            offsetYMin={-500}
            offsetYMax={50}
          >
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
          </Parallax>

          <Parallax
          offsetYMin={-250}
          offsetYMax={50}
          >
            <div id='mission'>
              <div>
                Brands today have a bigger mission than selling products.
              </div>
              <div> <br/> </div>
              <div>
                They must also contribute to human progress.
              </div>
            </div>
          </Parallax>

          <Parallax
          offsetYMin={-500}
          offsetYMax={50}
          >
            <div id='photoAndParagraph'>
              <img src='../stefan-stefancik-105376.jpg' id='detailsPhoto'/>
              <p className='titleText'>
                How is this <br/> possible?
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
              VIDEO
            </div>
          </Parallax>
        </div>
    );
  }
}

export default EventDetails;
