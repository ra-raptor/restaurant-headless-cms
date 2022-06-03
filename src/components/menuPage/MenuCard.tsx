import React from 'react'
import './menucard.scss'
import { IGatsbyImageData, GatsbyImage,getImage } from 'gatsby-plugin-image'
import { AiOutlinePlus } from 'react-icons/ai'

interface Food {
    name : string,
    id : string,
    category : string,
    price : number,
    image : IGatsbyImageData,
    veg: boolean
  }


function MenuCard(food:Food) {
    const image = getImage(food.image)!;
  return (
    <div className='menu-card'>
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
    </div>
  )
}

export default MenuCard