import {  GatsbyImage,getImage,StaticImage } from 'gatsby-plugin-image'
import React,{useState,useContext,useEffect} from 'react'
import { CardElType,ContextInterface,CartDataInterface } from '../../utils/Interface';
import { FadeInUp,ViewPortAnim } from '../../utils/variants'
import {motion} from 'framer-motion'
import {GlobalContextData} from '../../context/GlobalContext'
import { AiOutlinePlus,AiOutlineLine } from 'react-icons/ai'


function ProductCard({card}:CardElType) {
  const image = getImage(card.node.image.gatsbyImageData)!; // ! for not null 
  const textsub = JSON.parse(card.node.subtext.raw)
  const nutrition = card.node.nutrition
  const contextData:ContextInterface = useContext(GlobalContextData);
  const cartData = contextData.cartData;
  const setcartData = contextData.setcartData;
  const [count, setcount] = useState(0)
    useEffect(()=>{
        const list = cartData.filter((cartitem) => cartitem.id === card.node.id)
        if(list.length !== 0){
            setcount(list[0].count)
        }
    },[])

    const handleClick = (/*e:textinput_handler_type*/) => {
      if(count===0){
          const d:CartDataInterface = {
              count : 1,
              id : card.node.id,
              totalPrice : card.node.price
          }
          setcartData([...cartData,d])
      }
  }

  const addorsub = (action:string) => {
      const food = card.node
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
  const list = cartData.filter((cartitem) => cartitem.id === card.node.id)
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

const fullbtn = (
  <div onClick={handleClick} className="add-to-cart">
            
            <p>Add To Cart</p>
          </div>
)

  return (
    <motion.div variants={FadeInUp} initial="initial" whileInView="animate" viewport={ViewPortAnim} className="card">
        
        <div className="img-wrapper"><GatsbyImage image={image} alt={card.node.itemName} /></div>
        <div className="desc-wrapper">
          <div className="title-wrapper">
            <h3>{card.node.itemName} </h3>
            {card.node.veg ? 
            <StaticImage src='../../images/vegg.png' alt='veg' /> :
            <StaticImage src='../../images/nvg.png' alt='veg' />
            }
          </div>
          
          <p className='subtext'>{textsub.content[0].content[0].value}</p>
          <div className="row">
            <div className="col">
              <p className='label'> Category  </p>
              <p className='action'>{card.node.category}</p>
              <p className='label '>Price</p>
              <p className='action price'>₹ {card.node.price}</p>
            </div>
            
            <div className="col">
              {nutrition.map((item) => {
                return <p className='nutrition' key={item}>{item.trim()}</p>
              })}
            </div>
          </div>
          {count === 0 &&  fullbtn}
            {count !== 0 && cta }
          
        </div>
    </motion.div>
  )
}

export default ProductCard