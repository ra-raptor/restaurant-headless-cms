import React,{useEffect,useState} from 'react'

import {Link, graphql, useStaticQuery} from 'gatsby'
import './menu.scss'
import { IoMdCart } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { BsCaretDown } from 'react-icons/bs'
import { IGatsbyImageData } from 'gatsby-plugin-image'
interface range_handler_type{
    target : {
      value : string
    }
}

interface graphqlDataType{
  node : {
    itemName : string,
    veg : boolean,
    id : string,
    nutrition : Array<string>,
    price : number,
    category : string,
    image : {
      id : string,
      gatsbyImageData : IGatsbyImageData
    }
    subtext : {
      raw : string
    }
  }
}

interface catitemType{
    node : {
      category: string,
      id: string
      itemName: string
      price: number
      veg: boolean
  }
}

interface checkbox_handler_type{
  target : {
    checked : boolean
  }
}

function Hero() {

  const data = useStaticQuery(graphql`
    query MyCatQuery {
      allContentfulFood {
        edges {
          node {
            id
            itemName
            veg
            price
            category
          }
        }
      }
    }
  `)

  console.log(data);
  const catArray:Array<string> = [];
  data.allContentfulFood.edges.map((item:catitemType)=>{
    // console.log(item.node.category);
    
     catArray.push(item.node.category)
  })
  
  const categories:Array<string> =  Array.from(new Set(catArray));
  console.log(categories);
  

  const min = 0;
  const max = 1000;
  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(0);
  const [check, setcheck] = useState(false);
 

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
  const handleCheck = (e:checkbox_handler_type) => {
    const x = (e.target.checked)
    console.log(x)
    setcheck(x)
    
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
              {categories.map((cat)=>{
                return <label className="form-control">
                  <input type="checkbox" name="checkbox" />
                  {cat}
                </label>
              })}
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
            <label className="switch">
                <input checked={check} onChange={handleCheck} type="checkbox" />
                <div>
                    <span></span>
                </div>
            </label>
            <p className="switch-text">{check ? 'Pure Veg' : 'Non Veg'}</p>

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