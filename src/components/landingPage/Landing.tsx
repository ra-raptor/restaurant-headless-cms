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
            <article>
                <p className='pre'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                {/* where taste meets tradiotion */}
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a?</h1>
                <p className='post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur, officia ab sed doloremque non. Natus pariatur, officia ab sed doloremque non. Natus pariatur, officia ab sed doloremque non.</p>
                <div className='cta'>
                    <a href="#">ORDER NOW</a><a href='#'>VIEW MENU</a>
                </div>

                
                </article>
            <aside><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a?</h1></aside>
            
        </main>
        
    </div>
    
  )
}

export default Landing