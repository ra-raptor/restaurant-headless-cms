import React from 'react'
import Hero from './hero'

import "./landing.scss"
import Services from './services'

function Landing() {
  return (
    <>
        <Hero />
        <Services />
    
        <div className="two"></div>
    </>
  )
}

export default Landing