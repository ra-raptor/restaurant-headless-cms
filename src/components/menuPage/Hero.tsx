import React,{useEffect,useState,useContext} from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import './menu.scss'
import MenuCard from './MenuCard'
import {GlobalContextData} from '../../context/GlobalContext'
import { ContextInterface,Food,catitemType } from '../../utils/Interface'
import MenuNav from './MenuNav'
import SearchSuggestion from './SearchSuggestion'
import NotFound from './NotFound'
import Sidebar from './Sidebar'
import Search from './Search'

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

  useEffect(()=>{
    filter(catValues,val1,val2,check)
  },[catValues,check,val1,val2])

  useEffect(()=>{
    if(serachText!=""){
      const t = searchSuggestionArraySet.filter(word => {
       return word.includes(serachText.toLowerCase())
      })
      setsearchSuggestionActive(t);
    }else{
      setserachVisible(false)
      setsearchSuggestionActive([])
    }
  },[serachText])

  useEffect(()=>{
    const x = allFood.filter((food)=> food.name.toLowerCase().includes(serachText.toLowerCase()))
    settargetData(x)
  },[serachText])

  const pickSerach = (word:string) => {
    setserachText(word)
    setserachVisible(false)
  }
  
  return (
    <div className='hero-menu'>
        <MenuNav />
        <Search search={search} serachText={ serachText} setserachText={setserachText} setserachVisible={setserachVisible} />
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