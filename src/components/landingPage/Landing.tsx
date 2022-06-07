import React from 'react'
import Hero from './hero'
// import {StaticImage} from 'gatsby-plugin-image'
import "./landing.scss"
import Services from './services'
import Testinmonial from './testinmonial'
import Footer from './footer'
import {graphql, useStaticQuery,} from 'gatsby'
import ProductCard from './productCard'
import { CardType } from '../../utils/Interface';




function Landing() {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulFood {
      edges {
        node {
          itemName
          veg
          id
          price
          nutrition
          category
          subtext {
            raw
          }
          image {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
  `)
  const cards = data.allContentfulFood.edges
  
  return (
    <>
        <Hero />
        <Services />
        <div className="wave3"> </div>
        
        <div className='top'>
            <h2>Today's Deals</h2>
            <div className="cards">
                {cards.map((card:CardType)=> <ProductCard card={card} id={card.node.id} key={card.node.id} />)}
            </div>
        </div>
        <Testinmonial />
        <Footer />
        
    </>
  )
}

export default Landing