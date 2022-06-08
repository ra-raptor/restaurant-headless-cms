import {  GatsbyImage,getImage,StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { CardElType } from '../../utils/Interface';
import { FadeInUp,ViewPortAnim } from '../../utils/variants'
import {motion} from 'framer-motion'
function ProductCard({card}:CardElType) {
  const image = getImage(card.node.image.gatsbyImageData)!; // ! for not null 
  const textsub = JSON.parse(card.node.subtext.raw)
  const nutrition = card.node.nutrition
  
  return (
    <motion.div variants={FadeInUp} initial="initial" whileInView="animate" viewport={ViewPortAnim} className="card">
        
        <div className="img-wrapper"><GatsbyImage image={image} alt={card.node.itemName} /></div>
        <div className="desc-wrapper">
          <div className="title-wrapper">
            <h3>{card.node.itemName} </h3>
            {card.node.veg ? 
            <StaticImage src='../../images/vegg.png' alt='veg' /> :
            <StaticImage src='../../images/nvg.png' alt='veg' />
            }
          </div>
          
          <p className='subtext'>{textsub.content[0].content[0].value}</p>
          <div className="row">
            <div className="col">
              <p className='label'> Category  </p>
              <p className='action'>{card.node.category}</p>
              <p className='label '>Price</p>
              <p className='action price'>₹ {card.node.price}</p>
            </div>
            
            <div className="col">
              {nutrition.map((item) => {
                return <p className='nutrition' key={item}>{item.trim()}</p>
              })}
            </div>
          </div>
          <div className="add-to-cart">
            
            <p>Add To Cart</p>
          </div>
          
        </div>
    </motion.div>
  )
}

export default ProductCard