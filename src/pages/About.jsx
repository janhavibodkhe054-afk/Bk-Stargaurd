import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutStats from '../components/About/AboutStats'
import HomeAbout from '../components/About/HomeAbout'
import Team from '../components/About/Team'
import VisionMission from '../components/About/VisionMission'

import ClientsSection from '../components/About/ClientsSection'
import ContactCTA from '../components/Gallery/ContactCTA'
import CompanyOverview from '../components/About/CompanyOverview'
import CompanyLicenses from '../components/About/CompanyLicenses'


const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutStats/>
      <HomeAbout/>
      
      <CompanyOverview/>
      <CompanyLicenses/>
      <Team/>
      <VisionMission/>
      
      <ClientsSection/>
      <ContactCTA/>
    </div>
  )
}

export default About
