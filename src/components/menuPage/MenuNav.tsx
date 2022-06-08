import React,{useContext,useState,useEffect} from 'react'
import { IoMdCart } from 'react-icons/io'
import {Link} from 'gatsby'
import { motion } from 'framer-motion'
import { FadeInDown } from '../../utils/variants'
import {GlobalContextData} from '../../context/GlobalContext'
import { ContextInterface } from '../../utils/Interface'
const MenuNav = () => {
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
                <li className='active'>Menu</li>
                <Link  to="/cart"><li><IoMdCart /><span>{count > 0 ? count : ""}</span></li></Link>
            </ul>
        </motion.nav>
  )
}

export default MenuNav