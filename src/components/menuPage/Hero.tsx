import React,{useEffect,useState,useContext} from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import './menu.scss'
import { FaSearch } from 'react-icons/fa'
import MenuCard from './MenuCard'
import {GlobalContextData} from '../../context/GlobalContext'
import { ContextInterface,Food,catitemType, textinput_handler_type } from '../../utils/Interface'
import MenuNav from './MenuNav'
import SearchSuggestion from './SearchSuggestion'
import NotFound from './NotFound'
import Sidebar from './Sidebar'

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
    console.log(targetData);
  },[])


  const catArray:Array<string> = [];
  data.allContentfulFood.edges.map((item:catitemType)=>{
     catArray.push(item.node.category)
  })

  const searchSuggestionArray:Array<string> = [];
  data.allContentfulFood.edges.map((item:catitemType)=>{
    const name = item.node.itemName;
    name.split(' ').map(word => searchSuggestionArray.push(word.toLowerCase()))
    searchSuggestionArray.push(name.toLowerCase())
  })
  const searchSuggestionArraySet = [... new Set(searchSuggestionArray)]
  searchSuggestionArraySet.sort()
  
  const categories:Array<string> =  Array.from(new Set(catArray));

  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(300);
  const [check, setcheck] = useState(false);
  const [catValues, setcatValues] = useState<Array<string>>([])
  const [searchSuggestionActive, setsearchSuggestionActive] = useState<Array<string>>([])
  const [filterData, setfilterData] = useState<Array<Food>>(tempArr)

  const [serachText, setserachText] = useState("")
  const [serachVisible, setserachVisible] = useState(false)
  
  const [targetData, settargetData] = useState<Array<Food>>(tempArr)

  const filter = (categories:Array<string>,low:number,high:number,veg:boolean) => {
    let nw:Array<Food> = [];
    if(serachText==""){
        nw = allFood.filter((food)=>{
          return (food.price >= low) && ( food.price <= high )
      })
      if(veg){
        nw = nw.filter((food)=>{
          return food.veg==veg
        })
      }
      if(catValues.length > 0){
        nw = nw.filter((food)=> categories.includes(food.category))
      }
      
    }else{
      nw = targetData.filter((food)=>{
        return (food.price >= low) && ( food.price <= high )
    })
    if(veg){
      nw = nw.filter((food)=>{
        return food.veg==veg
      })
    }
    if(catValues.length > 0){
      nw = nw.filter((food)=> categories.includes(food.category))
    }
    }

    
     setfilterData(nw);
  
  }

  const search = () => {
    const x = allFood.filter((food)=> food.name.toLowerCase().includes(serachText.toLowerCase()))
    settargetData(x)
    setfilterData(x)
    setval1(0)
    setval2(400)
    setcheck(false)
    setserachVisible(false)

  }

  

 
  
 
  /*const handleCat = (data:string) => {
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
  }*/

  const handleSearchInput = (e:textinput_handler_type) => {
    setserachText(e.target.value)
    setserachVisible(true)
  }

  useEffect(()=>{
    filter(catValues,val1,val2,check)
  },[catValues,check,val1,val2])



  useEffect(()=>{
    if(serachText!=""){
      
      const t = searchSuggestionArraySet.filter(word => {
        //console.log(`${word} x ${serachText}`);
        
       return word.includes(serachText.toLowerCase())
      })
      setsearchSuggestionActive(t);
     /* console.log(serachText)
      console.log(t)*/
    }else{
      setserachVisible(false)
      setsearchSuggestionActive([])
    }
  },[serachText])


  useEffect(()=>{
    
      const x = allFood.filter((food)=> food.name.toLowerCase().includes(serachText.toLowerCase()))
    settargetData(x)
    // console.log(targetData);
    
    
  },[serachText])

  const pickSerach = (word:string) => {
    setserachText(word)
    setserachVisible(false)
  }
  
  return (
    <div className='hero-menu'>
        <MenuNav />
        <section className='search'>
          <div className="input-container">
            <FaSearch />
            <input type="text" value={serachText} onChange={handleSearchInput} placeholder='Search your favorite dish..'/>
          </div>
          <button onClick={search}>Search</button>
        </section>
        {serachVisible && <SearchSuggestion arr={searchSuggestionActive} pickSerach=  {pickSerach} />}
        <main>
          <Sidebar 
            val1={val1} 
            val2={val2} 
            catValues={catValues} 
            categories={categories} 
            check={check} 
            filter={filter} 
            setcatValues={setcatValues} 
            setcheck={setcheck} 
            setval1={setval1} 
            setval2={setval2}
          />
         {/*<div className="sidebar">
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
            </div>*/}
          <section className='show'>
          {filterData.length==0 && <NotFound />}
              <div className="card-wrapper">
                {filterData.length==0 && tempArr.map((food:Food) => {
                  return <MenuCard {...food} key={food.id} />
                })}
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