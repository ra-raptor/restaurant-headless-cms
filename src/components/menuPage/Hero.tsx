import React from 'react'
import {Link} from 'gatsby'
import './menu.scss'

function Hero() {
  return (
    <div className='hero-menu'>
        <nav>
            <p>Chillax Canteen</p>
            <ul>
            <Link  to="/"><li >Home</li></Link>
                <li className='active'>Menu</li>
                {/* <li><input type="text" /></li> */}
                <li>Cart</li>
            </ul>
        </nav>
    </div>
  )
}

export default Hero