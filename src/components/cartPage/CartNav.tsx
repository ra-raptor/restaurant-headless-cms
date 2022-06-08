import React,{useEffect,useState,useContext} from 'react'
import { motion } from 'framer-motion'
import { FadeInDown } from '../../utils/variants'
import { Link } from 'gatsby'
import { IoMdCart } from 'react-icons/io'
import { ContextInterface } from '../../utils/Interface'
import { GlobalContextData } from '../../context/GlobalContext'
const CartNav = () => {
    const contextData:ContextInterface = useContext(GlobalContextData);
    const cartData = contextData.cartData;
    const [count, setcount] = useState(0);
    useEffect(()=>{
      setcount(cartData.length);
  },[cartData])
  return (
    <motion.nav variants={FadeInDown} initial="initial" animate="animate">
            <Link  to="/"><p>Chillax Canteen</p></Link>
            <ul>
                <Link  to="/"><li >Home</li></Link>
                <Link  to="/menu"><li >Menu</li></Link> 
                <Link className='active'  to="/cart"><li><IoMdCart /><span>{count > 0 ? count : ""}</span></li></Link>
            </ul>
        </motion.nav>
  )
}

export default CartNav