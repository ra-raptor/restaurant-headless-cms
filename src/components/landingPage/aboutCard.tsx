import React from 'react'

interface CardType {
 
  title: string;
  subtext: string;
}

function AboutCard({title,subtext}:CardType ){
    
  return (
    <div className="about-card">

        <h2>{title}</h2>
        <p>{subtext}</p>
    </div>
  )
}

export default AboutCard