import React from 'react'
import "./landing.scss"
function Landing() {
  return (
    <div className='hero'>
        <nav>
            <p>Restaurant</p>
            <ul>
                <li className='active'>Home</li>
                <li>Menu</li>
                {/* <li><input type="text" /></li> */}
                <li>Cart</li>
            </ul>
        </nav>
        <main>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a?</h1>
        </main>
        
    </div>
    
  )
}

export default Landing