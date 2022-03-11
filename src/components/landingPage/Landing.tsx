import React from 'react'
import "./landing.scss"
function Landing() {
  return (
      <>
    <div className='hero'>
        <div className="wrapper-hero">
            <nav>
            <p>Chillax Canteen</p>
            <ul>
                <li className='active'>Home</li>
                <li>Menu</li>
                {/* <li><input type="text" /></li> */}
                <li>Cart</li>
            </ul>
        </nav>
        <main>
            <article>
                <p className='pre'>All You Need is Good Food and a Dream..</p>
                {/* where taste meets tradiotion */}
                <h1>A Day Without Cusine is Like a Day Without Sunshine.</h1>
                <p className='post'>Chillax Canteen is the one stop shop for food, comfort and taste. It's a place where taste meets tradition.
                Order, takeout or dine  the best Indian, Italian and French Cusine in town. 
                 </p>
                <div className='cta'>
                    <a href="#"><div className='primary'>ORDER NOW</div></a><a href='#'><div className='secondary'>VIEW MENU</div></a>
                </div>

                
                </article>
            <aside>
                {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a?</h1> */}
            
            <img width={300} src="" alt=""  />
            </aside>
            
        </main>
            </div>
        
        
    </div>
    {/* <div className="w1"></div> */}
    <div className="filler"></div>
    <div className="two"></div>
    </>
  )
}

export default Landing