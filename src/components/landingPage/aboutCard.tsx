import React from 'react'
import { StaticImage }from 'gatsby-plugin-image'

interface CardType {
    i:number,
  alt: string;
  title: string;
  subtext: string;
}

function AboutCard({i,alt,title,subtext}:CardType ){
    const images = ["https://img.icons8.com/fluency/144/000000/cherry.png",
            "https://img.icons8.com/fluency/144/000000/deliver-food.png",
            "https://img.icons8.com/fluency/144/000000/restaurant-table.png"
    ];
  return (
    <div className="card">
        <StaticImage alt={alt} width={100} height={100} src={images[i]} />
        <h1>{title}</h1>
        <p>{subtext}</p>
    </div>
  )
}

export default AboutCard