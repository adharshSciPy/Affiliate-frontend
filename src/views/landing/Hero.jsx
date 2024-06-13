import React from 'react'
import heroImg from '../../assets/landing-page/hero.svg'
import wave from '../../assets/landing-page/wave.svg'

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero__section">
                <div className="hero__text">
                    <h1>Best Affiliate</h1>
                    <h2>Marketting Platform</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cum commodi et consequuntur odit repudiandae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!</p>
                </div>

                <div className="hero__image">
                    <img src={heroImg} alt="hero-representation" />
                </div>
            </div>

            <div className="hero__wave">
                <img src={wave} alt="" />
            </div>
        </div>
    )
}

export default Hero