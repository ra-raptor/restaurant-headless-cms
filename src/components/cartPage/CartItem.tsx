import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React,{useContext} from 'react'
import { FaCircle } from 'react-icons/fa';
import { GlobalContextData } from '../../context/GlobalContext';
import { ContextInterface,CartDataInterface } from '../../utils/Interface';
import { AiOutlinePlus,AiOutlineLine } from 'react-icons/ai'

const CartItem = (data:CartDataInterface) => {
    const contextData:ContextInterface = useContext(GlobalContextData);
    const allFood = contextData.allFood;
    const cartData = contextData.cartData;
    const setcartData = contextData.setcartData;

    const currentFood = allFood.filter(food => food.id === data.id)[0]

    const image = getImage(currentFood.image)!;

    const vegnonveg = {
        color : currentFood.veg ? "green" : "red",
        border: currentFood.veg ? "1px solid green" : "1px solid red",
    }

    const addorsub = (action:string) => {
        const food = currentFood
        if(action==='ADD'){
            const newPrice = cartData.filter(item => item.id===food.id)[0].totalPrice + food.price
            setcartData(cartData.map(item => item.id===food.id ? {...item, count: data.count+1,totalPrice : newPrice } : item))
        }
        if(action==='SUB'){
            
            const newPrice = cartData.filter(item => item.id===food.id)[0].totalPrice - food.price
            if(data.count===1){
                setcartData(cartData.filter(item => item.id !== food.id))
            }else{
                setcartData(cartData.map(item => item.id===food.id ? {...item, count: data.count-1,totalPrice : newPrice } : item))
            }
            
        }
    }

    const remove = () => {
        setcartData(cartData.filter(item => item.id !== currentFood.id))
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
                    <div   className="del"  onClick={() => addorsub('SUB')}><AiOutlineLine /></div>
                    <div className="count">{data.count}</div>
                    <div  className="plus" onClick={() => addorsub('ADD')}><AiOutlinePlus /></div>
                </div>
            </div>
            <div className="price">
                <p className="totalPrice"> ₹ {data.totalPrice}</p>
                <p className="remove" onClick={remove}>remove</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem