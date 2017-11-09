import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import Scroll from 'react-scroll'

import LandingPage from './components/landingpage'
import LandingPageMobile from './components/landingpagemobile'
import TimeAndPlace from './components/timeandplace'
import About from './components/about'
import Speakers from './components/speakers'
import DemosAndWorkshops from './components/demosandworkshops'
import './main.css';

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


class App extends Component {
  constructor(){
    super();
    this.state = {
      showNav: false,
      showTicketForm: false
    }
  }

  navClick = () => {
    this.setState({showNav: !this.state.showNav})
    if (document.getElementById('navIcon')){
      document.getElementById('navIcon').id = 'activeNavIcon'
    } else {
      document.getElementById('activeNavIcon').id = 'navIcon'
    }
  }

  ticketClick = () => {
    this.setState({showTicketForm: !this.state.showTicketForm})
    if (document.getElementById('ticketClosed')){
      document.getElementById('ticketClosed').id = 'activeTicketOrder'
    } else {
      document.getElementById('activeTicketOrder').id = 'ticketClosed'
    }
  }

  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
  }
  scrollTo = () => {
    scroll.scrollTo(100);
  }
  scrollMore = () => {
    scroll.scrollMore(100);
  }
  handleSetActive = (to) => {
    this.setState({showNav: false})
  }

  render() {
    return (
      <div id='appWrapper'>
        <div id='navIconWrapper' onClick={this.navClick}><img id='navIcon' src='../nav.png'/></div>
        {this.state.showNav &&
          <div id='expandedNav'>
          <span id='closeNav' onclick={this.navClick}>X</span>
          <span><img src='../mirumopuslogo.png'  id='navLogo' alt='opus logo'/></span>

            <span id='navList'>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="timeAndPlace" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive.bind(this)}>Time and Place</Link>
              </div>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>About</Link>
              </div>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="speakers" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Speakers</Link>
              </div>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="demosAndWorkshops" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Demos &amp; Workshops</Link>
              </div>
            </span>
          </div>
        }
{/*
        {this.state.showTicketForm &&
          <div style="width:100%; text-align:left;"><iframe src="//eventbrite.com/tickets-external?eid=36226627819&ref=etckt" frameborder="0" height="308" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ><a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a></div></div>
        }*/}

        <ParallaxProvider>
          {window.matchMedia("(min-width: 700px)").matches &&
            <LandingPage />
          }
          {window.matchMedia("(max-width: 700px)").matches &&
            <LandingPageMobile />
          }
          <div id='getTickets'>
            <a href='https://www.eventbrite.com/e/mirum-opus-san-diego-tickets-36226627819' id='getTicketsLink'>GET TICKETS</a>
            {/*<p onClick  id='getTicketsLink'>GET TICKETS</p>*/}
          </div>
          <Element name='timeAndPlace'>
            <TimeAndPlace />
          </Element>
          <Element name='about'>
            <About />
          </Element>
          <Element name='speakers'>
            <Speakers />
          </Element>
          <Element name='demosAndWorkshops'>
            <DemosAndWorkshops />
          </Element>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
