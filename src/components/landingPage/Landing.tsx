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
        <article>
            <h3>About Us</h3>
            <h1>Why are we the Best?</h1>
            <div className="cards">
                <div className="card">s</div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </article>
    </div>
    <div className="two"></div>
    </>
  )
}

export default Landing