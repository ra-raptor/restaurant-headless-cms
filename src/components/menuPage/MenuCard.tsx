import React from 'react'
import './menucard.scss'
import { motion } from 'framer-motion'
import {  GatsbyImage,getImage } from 'gatsby-plugin-image'
import { AiOutlinePlus } from 'react-icons/ai'
import { Food } from '../../utils/Interface';

const spring = {
    type: "spring",
    damping: 25,
    stiffness: 120,
  };
  const animVarient = {
    in: {
      opacity: 0,
    },
    out: {
      opacity: 1,
    },
  };
function MenuCard(food:Food) {
    const image = getImage(food.image)!;
  return (
    <motion.div className='menu-card' transition={spring}
    initial={animVarient.in}
    animate={animVarient.out}
    layout>
        <div className="header">
            {/* <p>Category</p> */}
            <p>{food.category}</p>
            <h3>{food.name}</h3>
        </div>
        <div className="image">
        <GatsbyImage image={image} alt={food.name} />
            {/* <StaticImage alt="img" src="../../images/pizza.jpg" /> */}
        </div>
        <div  className="bottom">
            <div className="price">
                <p>Price</p>
                <h4>₹ {food.price}</h4>
            </div>
            {/* <div className="add">ADD</div> */}
            <div  className="add"><AiOutlinePlus /></div>
        </div>
    </motion.div>
  )
}

export default MenuCard