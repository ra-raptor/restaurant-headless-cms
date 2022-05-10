import React from 'react'
import {Link} from 'gatsby'
import './menu.scss'
import { IoMdCart } from 'react-icons/io'

function Hero() {
  return (
    <div className='hero-menu'>
        <nav>
            <p>Chillax Canteen</p>
            <ul>
            <Link  to="/"><li >Home</li></Link>
                <li className='active'>Menu</li>
                {/* <li><input type="text" /></li> */}
                <li><IoMdCart /></li>
            </ul>
        </nav>
    </div>
  )
}

export default Hero