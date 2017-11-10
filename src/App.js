import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import Scroll from 'react-scroll'

import LandingPage from './components/landingpage'
import LandingPageMobile from './components/landingpagemobile'
import TimeAndPlace from './components/timeandplace'
import About from './components/about'
import Speakers from './components/speakers'
import DemosAndWorkshops from './components/demosandworkshops'
import Footer from './components/footer'
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
      showForm: false,
    }
  }

  navClick = () => {
    this.setState({showNav: !this.state.showNav, showForm: false});
    if (document.getElementById('navIcon')){
      document.getElementById('navIcon').id = 'activeNavIcon'
    } else {
      document.getElementById('activeNavIcon').id = 'navIcon'
    }
  }

  formClick = () => {
    this.setState({showForm: !this.state.showForm, showNav: false});
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
        <div id='navIconWrapper' onClick={this.navClick}>
          {/*<img id='navIcon' src='../nav.png'/>*/}
          <div className="navIconBtn" id='navIcon'>
            <div className="navIconBtn__bar"></div>
            <div className="navIconBtn__bar"></div>
            <div className="navIconBtn__bar"></div>
          </div>
        </div>
        {this.state.showNav &&
          <div id='expandedNav'>
          <span id='closeNav' onClick={this.navClick}>X</span>
          <span><img src='../mirumopuslogo.png'  id='navLogo' alt='opus logo'/></span>

            <span id='navList'>
              <div className='navLink'>
                <Link activeClass="active" to="timeAndPlace" onClick={this.navClick} spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive.bind(this)}>Time and Place</Link>
              </div>
              <div className='navLink'>
                <Link activeClass="active" to="about"  onClick={this.navClick} spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>About</Link>
              </div>
              <div className='navLink'>
                <Link activeClass="active" to="speakers" onClick={this.navClick} spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Speakers</Link>
              </div>
              <div className='navLink'>
                <Link activeClass="active" to="demosAndWorkshops" onClick={this.navClick} spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Demos &amp; Workshops</Link>
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
        {!this.state.showForm &&
          <div id='getTickets'>
            <a onClick={this.formClick} id='getTicketsLink'>GET TICKETS</a>
          </div>
        }
        <div id='getTicketsContainer' className={this.state.showForm ? 'open': ''}>
          <a id='closeTicketBox' onClick={this.formClick}>X</a>
          <div style={{width:100+'%', textAlign:'left'}}><iframe src="//eventbrite.com/tickets-external?eid=36226627819&ref=etckt" frameBorder="0" height="308" width="100%" vspace="0" hspace="0" marginHeight="5" marginWidth="5" scrolling="auto" allowTransparency="true"></iframe><div style={{fontFamily:'Helvetica, Arial', fontSize:12 + 'px', padding: '10px 0 5px', margin: 2 +'px', width: 100+'%', textAlign:'left'}} ><a className="powered-by-eb" style={{color: '#ADB0B6', textDecoration: 'none'}} target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a></div></div>
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
          <Footer />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
