import React,{useState,createContext} from 'react'
import { ContextInterface, Food, Props,CartDataInterface } from '../utils/Interface';

const defaultData:ContextInterface = {
  foodData: [],
  allFood: [],
  cartData: [],
  setallFood : () => {},
  setfoodData: () => {},
  setcartData: () => {}
}

export const GlobalContextData = createContext<ContextInterface>(defaultData);

const  GlobalContext:React.FC<Props> = ({children}) => {
    const [foodData, setfoodData] = useState<Array<string>>([]);
    const [allFood, setallFood] = useState<Array<Food>>([])
    const [cartData, setcartData] = useState<Array<CartDataInterface>>([])
  return (
      
    <GlobalContextData.Provider value={{foodData,setfoodData,allFood,setallFood,cartData,setcartData}}>{children}</GlobalContextData.Provider>
  )
}

export default GlobalContext