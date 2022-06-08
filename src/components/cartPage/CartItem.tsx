import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React,{useContext} from 'react'
import { FaCircle } from 'react-icons/fa';
import { GlobalContextData } from '../../context/GlobalContext';
import { ContextInterface,CartDataInterface } from '../../utils/Interface';
import { AiOutlinePlus,AiOutlineLine } from 'react-icons/ai'

const CartItem = (data:CartDataInterface) => {
    const contextData:ContextInterface = useContext(GlobalContextData);
    const allFood = contextData.allFood;

    const currentFood = allFood.filter(food => food.id === data.id)[0]

    const image = getImage(currentFood.image)!;

    const vegnonveg = {
        color : currentFood.veg ? "green" : "red",
        border: currentFood.veg ? "1px solid green" : "1px solid red",
    }

  return (
    <div className='cart-item'>
        <div className="details">
            <div className="image"><GatsbyImage image={image} alt={currentFood.name} /></div>
            <div className="text">
                <div className='tag' style={vegnonveg}><FaCircle /></div>
                <p className='name'>{currentFood.name}</p>
                <p className='cat'> {currentFood.category}</p>
            </div>
        </div>
        <div className="actions">
            <div className="quantity">
                <div  className='cart-btns'>
                    <div   className="del" ><AiOutlineLine /></div>
                    <div className="count">{data.count}</div>
                    <div  className="plus"><AiOutlinePlus /></div>
                </div>
            </div>
            <div className="price">
                <p className="totalPrice"> ₹ {data.totalPrice}</p>
                <p className="remove">remove</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem