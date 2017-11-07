import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import Scroll from 'react-scroll'

import LandingPage from './components/landingpage'
import LandingPageMobile from './components/landingpagemobile'
import EventDetails from './components/eventdetails'
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
      showNav: false
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
      <div>
        <div id='navIcon' onClick={this.navClick}></div>
        {this.state.showNav &&
          <div id='expandedNav'>
            <span id='navLogo'>Mirum Opus</span>
            <span id='navList'>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="landingPage" smooth={true} duration={500} onSetActive={this.handleSetActive.bind(this)}>Time and Place</Link>
              </div>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="eventDetails" smooth={true} duration={500} onSetActive={this.handleSetActive}>About</Link>
              </div>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="speakers" smooth={true} duration={500} onSetActive={this.handleSetActive}>Speakers</Link>
              </div>
              <div className='navLink' onclick={this.navClick}>
                <Link activeClass="active" to="demosAndWorkshops" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Demos &amp; Workshops</Link>
              </div>
            </span>
            <div id='closeNav'>X</div>
          </div>
        }
        <ParallaxProvider>
          {window.matchMedia("(min-width: 700px)").matches &&
            <LandingPage />
          }
          {window.matchMedia("(max-width: 700px)").matches &&
            <LandingPageMobile />
          }
          <Element name='eventDetails'>
            <EventDetails />
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
