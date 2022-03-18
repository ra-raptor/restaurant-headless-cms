import React from 'react'
import Hero from './hero'
import {StaticImage} from 'gatsby-plugin-image'
import "./landing.scss"
import {GiFarmTractor,GiChefToque} from 'react-icons/gi'
import {VscFeedback} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'
import AboutCard from './aboutCard'
function Landing() {
  return (
      <>
    <Hero />
    
    {/* <div className="w1"></div> */}
    <div className="services">
        <div className="sideimage">
            <StaticImage  src="../../images/kiwi.png" alt="food" width={300} />
        </div>
        <article>
            <h3>About Us</h3>
            <h1>Why are we the Best?</h1>
            <div className="points">
                <p><span><GiFarmTractor /></span> We buy materials from authentic and organic sources.</p>
                <p><span><GiChefToque /></span> our chefs are the best in town. </p>
                <p><span><VscFeedback /></span> We have served 10,000+ satistied customers.</p>
                <p><span><FaAward /></span> We have been awarded for our quality. </p>
                
            </div>
            <div className="cards">
                <div className="card">
                    <StaticImage alt="cherry" width={100} height={100} src="https://img.icons8.com/fluency/144/000000/cherry.png" />
                    <AboutCard title='Organic Sources' subtext='We cook with fresh and organic food, processed under our supervison. We hand pick each of the ingridients for the best taste.' />
                </div> 
                <div className="card">
                    <StaticImage alt="cherry" width={100} height={100} src="https://img.icons8.com/fluency/144/000000/deliver-food.png" />
                    <AboutCard title='Free Delivery' subtext='We provide free home delivery on orders above ₹3000 in a 10Km radius. Our delivery partners will make sure that your order is safe.' />
                </div>
                <div className="card">
                     <StaticImage alt="cherry" width={100} height={100} src="https://img.icons8.com/fluency/144/000000/restaurant-table.png" />
                     <AboutCard title='Dine Comfortably' subtext='We accept both pre booking and spot booking. We make sure that your selected place is clean and hygenic. We also accept customisation requests.' />
                </div>
            </div>
            
        </article>
    </div>
    <div className="two"></div>
    </>
  )
}

export default Landing