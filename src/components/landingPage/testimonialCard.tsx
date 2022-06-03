import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import { CardInterface } from '../../utils/Interface';


function TestimonialCard({url,name,date,text}:CardInterface) {
    const x = url[0].node.childImageSharp;

  return (
    <div className='testi-card'>
        <GatsbyImage alt="dp"  image={x.fixed} />
        <div className="details">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="review">{text}</div>
        </div>
    </div>
  )
}

export default TestimonialCard