import React from 'react'
import { Navbar } from '../../components'
import Hero from './Hero'
import Clients from './Clients'
import Achievements from './Achievements'
import PotentialCustomer from './PotentialCustomer'
import Contact from './Contact'


const LandingPage = () => {
  return (
    <>
      <Navbar />  
      <Hero />
      <Clients />
      <Achievements />
      <PotentialCustomer />
      <Contact />
    </>
  )
}

export default LandingPage