import React from 'react'
import './menucard.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlinePlus } from 'react-icons/ai'

function MenuCard() {
  return (
    <div className='menu-card'>
        <div className="header">
            <p>Category</p>
            <h3>Name</h3>
        </div>
        <div className="image">
            <StaticImage alt="img" src="../../images/pizza.jpg" />
        </div>
        <div className="bottom">
            <div className="price">
                <p>Price</p>
                <h4>₹ 122</h4>
            </div>
            {/* <div className="add">ADD</div> */}
            <div className="add"><AiOutlinePlus /></div>
        </div>
    </div>
  )
}

export default MenuCard