import React from 'react'
import { IoMdCart } from 'react-icons/io'
import {Link} from 'gatsby'
const MenuNav = () => {
  return (
    <nav>
            <p>Chillax Canteen</p>
            <ul>
            <Link  to="/"><li >Home</li></Link>
                <li className='active'>Menu</li>
                <li><IoMdCart /></li>
            </ul>
        </nav>
  )
}

export default MenuNav