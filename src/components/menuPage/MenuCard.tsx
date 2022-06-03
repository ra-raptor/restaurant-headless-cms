import React,{useContext} from 'react'
import './menucard.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlinePlus } from 'react-icons/ai'
import {GlobalContextData} from '../../context/GlobalContext'


interface ContextInterface {
    foodData: Array<string>,
    setfoodData : (foodData : Array<string>) => void
  }

function MenuCard() {

    const data:ContextInterface = useContext(GlobalContextData);
    console.log(data.foodData);
    const fn = data.setfoodData
    
  return (
    <div className='menu-card'>
        <div className="header">
            <p>Category</p>
            <h3>Name</h3>
        </div>
        <div className="image">
            <StaticImage alt="img" src="../../images/pizza.jpg" />
        </div>
        <div  className="bottom">
            <div className="price">
                <p>Price</p>
                <h4>₹ 122</h4>
            </div>
            {/* <div className="add">ADD</div> */}
            <div onClick={()=>{fn(["hello"])}} className="add"><AiOutlinePlus /></div>
        </div>
    </div>
  )
}

export default MenuCard