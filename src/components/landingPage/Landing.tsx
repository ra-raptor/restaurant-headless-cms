import React from 'react'
import Hero from './hero'
import {StaticImage} from 'gatsby-plugin-image'
import "./landing.scss"
function Landing() {
  return (
      <>
    <Hero />
    
    {/* <div className="w1"></div> */}
    <div className="services">
        <div className="sideimage">
            <StaticImage  src="../../images/kiwi.png" alt="food" width={300} />
        </div>
        <article></article>
    </div>
    <div className="two"></div>
    </>
  )
}

export default Landing