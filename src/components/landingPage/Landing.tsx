import React from 'react'
import Hero from './hero'
import {StaticImage} from 'gatsby-plugin-image'
import "./landing.scss"
import Services from './services'

function Landing() {
  return (
    <>
        <Hero />
        <Services />
        <div className="wave3"> 
        {/* <StaticImage alt="wave" src='../../images/wave3.svg' /> */}
        </div>
        <div className="two"></div>
    </>
  )
}

export default Landing