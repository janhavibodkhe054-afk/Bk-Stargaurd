import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutHome from '../components/Home/AboutHome'
import HomeServices from '../components/Home/HomeServices'
import HomeStats from '../components/Home/HomeStats'
import WhyChoose from '../components/Home/WhyChoose'
import OurProcess from '../components/Home/OurProcess'
import HomeTestimonials from '../components/Home/HomeTestimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutHome/>
      <HomeServices/>
      <WhyChoose/>
      <OurProcess/>
      <HomeStats/>
      <HomeTestimonials/>
      
    </div>
  )
}

export default Home
