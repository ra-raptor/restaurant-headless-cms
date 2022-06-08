import React,{useContext,useEffect,useState} from 'react'
import './menucard.scss'
import { motion } from 'framer-motion'
import {  GatsbyImage,getImage } from 'gatsby-plugin-image'
import { AiOutlinePlus,AiOutlineLine } from 'react-icons/ai'
import { ContextInterface, Food,CartDataInterface } from '../../utils/Interface';
import { springVarient } from '../../utils/variants'
import {GlobalContextData} from '../../context/GlobalContext'
function MenuCard(food:Food) {
    const image = getImage(food.image)!;
    const contextData:ContextInterface = useContext(GlobalContextData);
    const cartData = contextData.cartData;
    const setcartData = contextData.setcartData;
    const [count, setcount] = useState(0)
    useEffect(()=>{
        const list = cartData.filter((cartitem) => cartitem.id === food.id)
        if(list.length !== 0){
            setcount(list[0].count)
        }
    },[])
    console.log(cartData)
    const handleClick = (/*e:textinput_handler_type*/) => {
        if(count===0){
            const d:CartDataInterface = {
                count : 1,
                id : food.id,
                totalPrice : food.price
            }
            setcartData([...cartData,d])
        }
    }

    const addorsub = (action:string) => {
        
        if(action==='ADD'){
            const newPrice = cartData.filter(item => item.id===food.id)[0].totalPrice + food.price
            setcartData(cartData.map(item => item.id===food.id ? {...item, count: count+1,totalPrice : newPrice } : item))
        }
        if(action==='SUB'){
            
            const newPrice = cartData.filter(item => item.id===food.id)[0].totalPrice - food.price
            if(count===1){
                setcartData(cartData.filter(item => item.id !== food.id))
                setcount(0)
            }else{
                setcartData(cartData.map(item => item.id===food.id ? {...item, count: count-1,totalPrice : newPrice } : item))
            }
            
        }
    }

    useEffect(()=>{
        const list = cartData.filter((cartitem) => cartitem.id === food.id)
        if(list.length !== 0){
            setcount(list[0].count)
        }
    },[cartData])


    const cta = (
        <div className='cart-btns'>
            <div className="del" onClick={() => addorsub('SUB')}><AiOutlineLine /></div>
            <div className="count">{count}</div>
            <div className="plus"  onClick={() => addorsub('ADD')}><AiOutlinePlus /></div>
        </div>
    )

  return (
    <motion.div className='menu-card' 
    variants={springVarient}
    initial="in"
    exit="out"
    animate="out"
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
            {count === 0 &&  <div  className="add" onClick={handleClick}><AiOutlinePlus />  </div>}
            {count !== 0 && cta }
        </div>
    </motion.div>
  )
}

export default MenuCard