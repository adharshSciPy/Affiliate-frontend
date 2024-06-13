import React from 'react'
import { Navbar } from '../../components'
import Hero from './Hero'
import Clients from './Clients'
import Service from './Service'
import Achievements from './Achievements'


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Achievements />
      {/* <Service /> */}
    </>
  )
}

export default LandingPage