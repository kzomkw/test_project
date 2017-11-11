import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesComponent(props) {
  return(
    <Particles
      params={{
        particles: {
          number: {
            value: 10
          },
          size: {
            value: 0
          },
          line_linked: {
            color: "#E24498",
            width: 1,
            distance: 800,
            opacity: 1
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }
      }}
      style={{
        position: "absolute",
        zIndex: 0,
      }}
    />
  )
}
