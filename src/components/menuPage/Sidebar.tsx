import React,{useState,useEffect} from 'react'
import { BsCaretDown,BsCaretUp } from 'react-icons/bs'
import { motion, AnimatePresence } from "framer-motion";
import { range_handler_type,checkbox_handler_type } from '../../utils/Interface';

interface SidebarInterface{
    categories : Array<string>,
    catValues : Array<string>,
    val1 : number,
    val2 : number,
    check : boolean,
    setcatValues : (catValues : Array<string>) => void,
    setval1 : (val1 : number) => void,
    setval2 : (val2 : number) => void,
    setcheck : (check : boolean) => void,
    filter : (categories:Array<string>,low:number,high:number,veg:boolean) => void

}
interface CListInterface{
  category : string,
  value : boolean
}



const min = 50;
const max = 500;

const Sidebar = ({categories,catValues,val1,val2,check,setcatValues,setval1,setval2,setcheck,filter}:SidebarInterface) => {
    const handleCat = (data:string) => {
        const t = catValues.filter(x =>  x == data);
        if(t.length == 0){
          setcatValues([...catValues,data])
        }else{
          setcatValues(catValues.filter(x =>  x != data))
        }
        setcheckList(
          checkList.map(item => 
              item.category === data 
              ? {...item, value : !item.value} 
              : item 
      ))
      console.log(checkList);
      
        
    }

    const checkboxValue = (data:string) => {
      const t = checkList.filter(item => item.category === data);
      if(t.length > 0){
        return t[0].value;
      }else{
        return false
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
      const [isCatOpen, setisCatOpen] = useState(true)
      const [checkList, setcheckList] = useState<Array<CListInterface>>([])

      useEffect(() =>{
        const carr:Array<CListInterface>= [];
        categories.map((cat) => {
          const x = {
            category : cat,
            value : false
          }
          carr.push(x)
        })
        setcheckList(carr)
      },[])

  return (
    <div className="sidebar">
            <motion.div className='sidebar-heading'
             initial={true}  
            //  animate={{ backgroundColor: isCatOpen ? "#FF0088" : "#0055FF" }}
             onClick={() => setisCatOpen(!isCatOpen)}
            >
              <h4>Categories</h4>
              { isCatOpen ? <BsCaretDown /> : <BsCaretUp /> }
            </motion.div>
            <AnimatePresence initial={true}>
              {isCatOpen && (
                  <motion.div className="category-wrapper"
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.1, ease: 'easeIn'}}
                  >
                  {categories.map((cat)=>{
                    return <label key={cat} className="form-control">
                      <input type="checkbox" checked={checkboxValue(cat)} onChange={()=>handleCat(cat)} name="checkbox"   />
                      {cat}
                    </label>
                  })}
                </motion.div>
              )}
            </AnimatePresence>
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
  )
}

export default Sidebar