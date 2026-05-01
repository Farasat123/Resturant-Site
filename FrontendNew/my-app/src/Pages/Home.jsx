import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Qualities from '../components/Qualities'
import Reservation from '../components/Reservation'
import Services from '../components/Services'
import Team from '../components/Team'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      
      <About/>
      
      <Qualities/>
      <Reservation/>
      <Services/>
      <Team/>
      <Footer/>

    </div>
  )
}

export default Home
