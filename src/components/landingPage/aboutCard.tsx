import React from 'react'
import { AboutCardType } from '../../utils/Interface'



function AboutCard({title,subtext}:AboutCardType ){
    
  return (
    <div className="about-card">

        <h2>{title}</h2>
        <p>{subtext}</p>
    </div>
  )
}

export default AboutCard