import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import {IoMdCart} from 'react-icons/io'
import { motion } from 'framer-motion'
import { FadeInDown, FadeInUp, staggeredContainer } from '../../utils/variants'


function Hero() {
  return (
        <div className='hero'>
        <div className="wrapper-hero">
            <motion.nav variants={FadeInDown} initial="initial" animate="animate">
            <Link  to="/"><p>Chillax Canteen</p></Link>
                <ul>
                    <li className='active'>Home</li>
                    <Link to="/menu"><li>Menu</li></Link>
                    {/* <li><input type="text" /></li> */}
                    <li><IoMdCart /></li>
                </ul>
            </motion.nav>
        <motion.main variants={staggeredContainer} initial="initial" animate="animate">
            <article>
                <motion.p variants={FadeInUp} className='pre'>All You Need is Good Food and a Dream..</motion.p>
                {/* where taste meets tradiotion */}
                <motion.h1 variants={FadeInUp} initial="initial" animate="animate" >A Day Without Cusine is Like a Day Without Sunshine.</motion.h1 >
                <motion.p variants={FadeInUp} className='post'>Chillax Canteen is the one stop shop for food, comfort and taste. It's a place where taste meets tradition.
                Order, takeout or dine  the best Indian, Italian and French Cusine in town. 
                 </motion.p>
                <motion.div variants={FadeInDown} initial="initial" animate="animate" className='cta'>
                    <Link to="#deals"><div className='primary'>ORDER NOW</div></Link>
                    <Link to="/menu"><div className='secondary'>VIEW MENU</div></Link>
                </motion.div>

                
                </article>
            <motion.aside variants={FadeInDown}>
                {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a?</h1> */}
            <StaticImage src="../../images/ss2.png" alt="food" width={1200} />
            {/* //<img width={300} src="" alt=""  /> */}
            </motion.aside>
            
        </motion.main>
        </div> 
    </div>
  )
}

export default Hero