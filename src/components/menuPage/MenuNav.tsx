import React from 'react'
import { IoMdCart } from 'react-icons/io'
import {Link} from 'gatsby'
import { motion } from 'framer-motion'
import { FadeInDown } from '../../utils/variants'

const MenuNav = () => {
  return (
    <motion.nav variants={FadeInDown} initial="initial" animate="animate">
            <Link  to="/"><p>Chillax Canteen</p></Link>
            <ul>
            <Link  to="/"><li >Home</li></Link>
                <li className='active'>Menu</li>
                <li><IoMdCart /></li>
            </ul>
        </motion.nav>
  )
}

export default MenuNav