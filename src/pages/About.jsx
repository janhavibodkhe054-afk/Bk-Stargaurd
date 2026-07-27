import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutStats from '../components/About/AboutStats'
import HomeAbout from '../components/About/HomeAbout'
import Team from '../components/About/Team'
import VisionMission from '../components/About/VisionMission'
import Portfolio from '../components/About/Portfolio'


const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutStats/>
      <HomeAbout/>
      <Team/>
      <VisionMission/>
      <Portfolio/>
    </div>
  )
}

export default About
