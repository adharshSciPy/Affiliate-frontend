import React from 'react'
import { Navbar } from '../../components'
import heroImg from '../../assets/hero.svg'
import wave from '../../assets/wave.svg'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landingpage">

        <div className="landingpage__hero">
          <div className="landingpage__text">
            <h1>Best Affiliate</h1>
            <h2>Marketting Platform</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cum commodi et consequuntur odit repudiandae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!</p>
          </div>

          <div className="landingpage__image">
            <img src={heroImg} alt="hero-representation" />
          </div>
        </div>

        <div className="landingpage__wave">
          <img src={wave} alt="" />
        </div>
      </div>
    </>
  )
}

export default LandingPage