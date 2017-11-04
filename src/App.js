import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import Particles from 'react-particles-js';

import LandingPage from './components/landingpage'
import EventDetails from './components/eventdetails'
import Speakers from './components/speakers'
import DemosAndWorkshops from './components/demosandworkshops'
import './main.css';

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxProvider>
          <LandingPage />
          <EventDetails />
          <Speakers />
          <DemosAndWorkshops />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
