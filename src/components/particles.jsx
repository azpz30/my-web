import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import particleConfig from '../particle_config';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    params={particleConfig}
    style={{ zIndex: '-1' }}
  />
  )
}
export default ParticleBackground;
