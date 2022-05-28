import React,{useEffect,useState} from 'react'
import {Link} from 'gatsby'
import './menu.scss'
import { IoMdCart } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { BsCaretDown } from 'react-icons/bs'

interface range_handler_type{
  
    target : {
      value : string
    }
  
}

function Hero() {
  const min = 0;
  const max = 1000;
  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(0);
 

  const handler1 = (e:range_handler_type) => {
    const x = parseInt(e.target.value)
    if(x < val2){
      setval1(x);
    }
  }
  const handler2 = (e:range_handler_type) => {
    const x = parseInt(e.target.value)
    if(x > val1){
      setval2(x);
    }
  }
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
            <div className='sidebar-heading'>
              <h4>Categories</h4>
              <BsCaretDown />
            </div>
            <div className="category-wrapper">
              <label className="form-control">
                <input type="checkbox" name="checkbox" />
                Italian
              </label>

              <label className="form-control">
                <input type="checkbox" name="checkbox-checked" />
                Fastfood
              </label>
              <label className="form-control">
                <input type="checkbox" name="checkbox-checked" />
                Fastfood
              </label>
              <label className="form-control">
                <input type="checkbox" name="checkbox-checked" />
                Fastfood
              </label>
              <label className="form-control">
                <input type="checkbox" name="checkbox-checked" />
                Fastfood
              </label>
            </div>
            <div className='sidebar-heading'>
              <h4>Price Range</h4>
              <BsCaretDown />
            </div>
            <p className='slider-text'>₹ {val1} - ₹ {val2}</p>
            <div className="slider-wrapper">
              <div className="track"></div>
              <input  value={val1} onChange={handler1} type="range" id="sl1" min={min} max={max}/>
              <input type="range" id="sl2" min={min} max={max} value={val2} onChange={handler2} />
            </div>
            <div className="rangepadding"></div>
            <div className='sidebar-heading'>
              <h4>Veg</h4>
              <BsCaretDown />
            </div>
            <div className="switch-wrapper">
            <div className="switch-button">
              <input className="switch-button-checkbox" type="checkbox"></input>
              <label className="switch-button-label" htmlFor="">
                <span className="switch-button-label-span">Photo</span></label>
            </div>

            </div>
          </div>
          <section className='show'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nostrum dolorum molestiae consequuntur amet, minima quae incidunt perspiciatis voluptatibus rerum itaque nam perferendis. Corporis odit velit ipsum, maxime beatae eligendi ullam aliquid qui totam nesciunt doloribus error voluptatem vitae perferendis temporibus, sunt magnam, dolorum odio nam doloremque sit enim!
          </section>
        </main>
    </div>
  )
}

export default Hero