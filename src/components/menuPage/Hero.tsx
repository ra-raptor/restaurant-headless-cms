import React from 'react'
import {Link} from 'gatsby'
import './menu.scss'
import { IoMdCart } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'


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
        <section className='search'>
          <div className="input-container">
            <FaSearch />
            <input type="text" placeholder='Search your favorite dish..'/>
          </div>
          <button>Search</button>
        </section>
        <main>
          <div className="sidebar">
            <div>Categories</div>
            <div></div>
            <div></div></div>
          <section className='show'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nostrum dolorum molestiae consequuntur amet, minima quae incidunt perspiciatis voluptatibus rerum itaque nam perferendis. Corporis odit velit ipsum, maxime beatae eligendi ullam aliquid qui totam nesciunt doloribus error voluptatem vitae perferendis temporibus, sunt magnam, dolorum odio nam doloremque sit enim!
          </section>
        </main>
    </div>
  )
}

export default Hero