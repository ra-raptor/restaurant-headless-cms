import React,{useContext,useEffect,useState} from 'react'
import './menucard.scss'
import { motion } from 'framer-motion'
import {  GatsbyImage,getImage } from 'gatsby-plugin-image'
import { AiOutlinePlus,AiOutlineLine } from 'react-icons/ai'
import { ContextInterface, Food,CartDataInterface } from '../../utils/Interface';
import { FadeInLeft, FadeInRight, FadeInUp, springVarient } from '../../utils/variants'
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

    const col = count > 0 ? "#FF0066" : "#353535"

    const borderStyle = {
        borderLeft : `3px solid ${col}`
    }

    const cta = (
        <div className='cart-btns'>
            <motion.div variants={FadeInLeft} initial="initial" animate="animate" exit="exit" className="del" onClick={() => addorsub('SUB')}><AiOutlineLine /></motion.div>
            <div className="count">{count}</div>
            <motion.div variants={FadeInRight} initial="initial" animate="animate" exit="exit" className="plus"  onClick={() => addorsub('ADD')}><AiOutlinePlus /></motion.div>
        </div>
    )

  return (
    <motion.div className='menu-card' 
    variants={springVarient}
    initial="in"
    exit="out"
    animate="out"
    layout>
        <div className="header" style={borderStyle}>
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
            {count === 0 &&  <motion.div variants={FadeInUp} initial="initial" whileInView="animate"  className="add" onClick={handleClick}><AiOutlinePlus />  </motion.div>}
            {count !== 0 && cta }
        </div>
    </motion.div>
  )
}

export default MenuCard