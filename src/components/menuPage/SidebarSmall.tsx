import React,{useState,useEffect} from 'react'
import { BsCaretDown,BsCaretUp } from 'react-icons/bs'
import { range_handler_type,checkbox_handler_type,CListInterface,SidebarInterface } from '../../utils/Interface';
import { motion, AnimatePresence } from "framer-motion";
import { SidebarAnim } from '../../utils/variants';
const min = 50;
const max = 500;

const SidebarSmall = ({categories,catValues,val1,val2,check,setcatValues,setval1,setval2,setcheck,filter,checkboxValue,setcheckList,checkList}:SidebarInterface) => {
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
      const [isPriceOpen, setisPriceOpen] = useState(true)
      const [isVegOpen, setisVegOpen] = useState(true)
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
    <div className="sidebar sidebar-small">
            <div className='sidebar-category-wrapper'>
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
                    variants={SidebarAnim}
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
            </div>
            <div className='sidebar-price-wrapper'>
            <motion.div className='sidebar-heading'
              initial={true}
              onClick={() => setisPriceOpen(!isPriceOpen)}
            >
              <h4>Price Range</h4>
              { isPriceOpen ? <BsCaretDown /> : <BsCaretUp /> }
            </motion.div>
            <AnimatePresence initial={true}>
                  {
                    isPriceOpen && (
                      <>
                      <p className='slider-text'>₹ {val1} - ₹ {val2}</p>
                      <motion.div className="slider-wrapper" key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={SidebarAnim}
                  >
                        <div className="track"></div>
                        <input  value={val1} onChange={handler1} type="range" id="sl1" min={min} max={max}/>
                        <input type="range" id="sl2" min={min} max={max} value={val2} onChange={handler2} />
                      </motion.div>
                      <div className="rangepadding"></div>
                      </>
                    )
                  }
            </AnimatePresence>
            </div>
            <div className="sidebar-veg-wrapper">
            <motion.div className='sidebar-heading'
              initial={true}
              onClick = {() => setisVegOpen(!isVegOpen)}
              >
              <h4>Veg</h4>
              { isVegOpen ? <BsCaretDown /> : <BsCaretUp /> }
            </motion.div>
              <AnimatePresence initial={true}>
                {
                  isVegOpen && (
                    <motion.div className="switch-wrapper" key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={SidebarAnim}>
                    <label className="switch">
                        <input checked={check} onChange={handleCheck} type="checkbox" />
                        <div>
                            <span></span>
                        </div>
                    </label>
                    <p className="switch-text">{check ? 'Pure Veg' : 'Non Veg'}</p>
        
                    </motion.div>
                  )
                }
              </AnimatePresence>

            </div>
            
          </div>
  )
}

export default SidebarSmall