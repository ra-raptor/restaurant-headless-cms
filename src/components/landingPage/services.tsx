import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {GiFarmTractor,GiChefToque} from 'react-icons/gi'
import {VscFeedback} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'
import AboutCard from './aboutCard'
import {motion} from 'framer-motion'
import { FadeInDown, FadeInUp,staggeredContainer,ViewPortAnim } from '../../utils/variants'

function Services() {
  return (
    <div className="services">
        <div className="service-wrap">
            <motion.div variants={FadeInUp} initial="initial" whileInView="animate" viewport={ViewPortAnim} className="sideimage">
                <StaticImage  src="../../images/kiwi.png" alt="food" width={300} />
            </motion.div>
            <article>
                <motion.h3 variants={FadeInUp} initial="initial" whileInView="animate" viewport={ViewPortAnim}>About Us</motion.h3>
                <motion.h1 variants={FadeInUp} initial="initial" whileInView="animate" viewport={ViewPortAnim}>Why are we the Best?</motion.h1> 
                <motion.div variants={staggeredContainer} initial="initial" whileInView="animate" viewport={ViewPortAnim} className="points">
                    <motion.p variants={FadeInUp}><span><GiFarmTractor /></span> We buy materials from authentic and organic sources.</motion.p>
                    <motion.p variants={FadeInUp}><span><GiChefToque /></span> our chefs are the best in town. </motion.p>
                    <motion.p variants={FadeInUp}><span><VscFeedback /></span> We have served 10,000+ satistied customers.</motion.p>
                    <motion.p variants={FadeInUp}><span><FaAward /></span> We have been awarded for our quality. </motion.p>
                </motion.div>
                <motion.div variants={staggeredContainer} initial="initial" whileInView="animate" className="cards">
                    <motion.div variants={FadeInDown} className="card">
                        <StaticImage alt="cherry" width={100} height={100} src="https://img.icons8.com/fluency/144/000000/cherry.png" />
                        <AboutCard title='Organic Sources' subtext='We cook with fresh and organic food, processed under our supervison. We hand pick each of the ingridients for the best taste.' />
                    </motion.div> 
                    <motion.div variants={FadeInDown} className="card">
                        <StaticImage alt="cherry" width={100} height={100} src="https://img.icons8.com/fluency/144/000000/deliver-food.png" />
                        <AboutCard title='Free Delivery' subtext='We provide free home delivery on orders above ₹3000 in a 10Km radius. Our delivery partners will make sure that your order is safe.' />
                    </motion.div>
                    <motion.div variants={FadeInDown} className="card">
                        <StaticImage alt="cherry" width={100} height={100} src="https://img.icons8.com/fluency/144/000000/restaurant-table.png" />
                        <AboutCard title='Dine Comfortably' subtext='We accept both pre booking and spot booking. We make sure that your selected place is clean and hygenic. We also accept customisation requests.' />
                    </motion.div>
                </motion.div>
                
            </article>
        </div>
    </div>
  )
}

export default Services