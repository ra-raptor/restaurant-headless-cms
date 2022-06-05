import React from 'react'
import { BsCaretDown } from 'react-icons/bs'
import { range_handler_type,checkbox_handler_type } from '../../utils/Interface';

const min = 50;
const max = 500;

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
const SidebarSmall = ({categories,catValues,val1,val2,check,setcatValues,setval1,setval2,setcheck,filter}:SidebarInterface) => {
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
  return (
    <div className="sidebar sidebar-small">
            <div className='sidebar-category-wrapper'>
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
            </div>
            <div className='sidebar-price-wrapper'>
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
            </div>
            <div className="sidebar-veg-wrapper">
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
            
          </div>
  )
}

export default SidebarSmall