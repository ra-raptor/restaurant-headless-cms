import React,{useEffect,useState,useContext} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import './menu.scss'
import { IoMdCart } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { BsCaretDown } from 'react-icons/bs'
import MenuCard from './MenuCard'
import {GlobalContextData} from '../../context/GlobalContext'
import { checkbox_handler_type,ContextInterface,Food,range_handler_type,catitemType } from '../../utils/Interface'

function Hero() {

  const contextData:ContextInterface = useContext(GlobalContextData);
  const setfoodData = contextData.setallFood;
  const allFood = contextData.allFood;

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
            image {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const tempArr:Array<Food> = [];
  data.allContentfulFood.edges.map((item:catitemType)=>{
    tempArr.push({
      name : item.node.itemName,
      id : item.node.id,
      category : item.node.category,
      price : item.node.price,
      image : item.node.image.gatsbyImageData,
      veg: item.node.veg
    })
 })
  

  useEffect(()=>{
    setfoodData(tempArr);
  },[])


  const catArray:Array<string> = [];
  data.allContentfulFood.edges.map((item:catitemType)=>{
     catArray.push(item.node.category)
  })
  
  const categories:Array<string> =  Array.from(new Set(catArray));


  const min = 50;
  const max = 500;
  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(300);
  const [check, setcheck] = useState(false);
  const [catValues, setcatValues] = useState<Array<string>>([])
  const [filterData, setfilterData] = useState<Array<Food>>(tempArr)

  const filter = (categories:Array<String>,low:number,high:number,veg:boolean) => {
    let nw = allFood.filter((food)=>{
        return (food.price >= low) && ( food.price <= high )
    })
    if(veg){
      nw = nw.filter((food)=>{
        return food.veg==veg
      })
    }
    nw = nw.filter((food)=> categories.includes(food.category))
     setfilterData(nw);
     setfilterData((old):Array<Food> => old);
  
  }
 
  const handleCat = (data:string) => {
      const t = catValues.filter(x =>  x == data);
      if(t.length == 0){
        setcatValues([...catValues,data])
      }else{
        setcatValues(catValues.filter(x =>  x != data))
      }
      
  }
 

  const handler1 = (e:range_handler_type) => {
    const x = parseInt(e.target.value)
    if(x < val2){
      setval1(x);
    }
    filter(catValues,val1,val2,check)
  }
  const handler2 = (e:range_handler_type) => {
    const x = parseInt(e.target.value)
    if(x > val1){
      setval2(x);
    }
    filter(catValues,val1,val2,check)
  }
  const handleCheck = (e:checkbox_handler_type) => {
    const x = (e.target.checked)
    setcheck(x)
    filter(catValues,val1,val2,check)
  }

  useEffect(()=>{
    filter(catValues,val1,val2,check)
  },[catValues,check,val1,val2])

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
                return <label key={cat} className="form-control">
                  <input type="checkbox" onChange={()=>handleCat(cat)} name="checkbox"   />
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
              <br />
              <div className="card-wrapper">
              {filterData.map((food:Food)=>{
                return <MenuCard {...food} key={food.id} />
              })}
              </div>
          </section>
        </main>
    </div>
  )
}

export default Hero