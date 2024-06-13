import React from 'react'
import { Navbar } from '../../components'
import Hero from './Hero'
import Clients from './Clients'


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
    </>
  )
}

export default LandingPage