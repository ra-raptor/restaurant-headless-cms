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
        <div className="wave3"> </div>
        
        <div className='top'>
            <h2>Today's Deals</h2>
            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
        <div className="two"></div>
        
    </>
  )
}

export default Landing