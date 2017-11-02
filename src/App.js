import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'

import LandingPage from './components/landingpage'
import EventDetails from './components/eventdetails'
import Speakers from './components/speakers'
import DemosAndWorkshops from './components/demosandworkshops'
import './main.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
          <LandingPage />
          <EventDetails />
          <Speakers />
          <DemosAndWorkshops />
      </ParallaxProvider>
    );
  }
}

export default App;
