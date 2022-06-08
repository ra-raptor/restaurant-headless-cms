import React,{useState,createContext} from 'react'
import { ContextInterface, Food, Props } from '../utils/Interface';

const defaultData:ContextInterface = {
  foodData: [],
  allFood: [],
  setallFood : () => {},
  setfoodData: () => {},
}

export const GlobalContextData = createContext<ContextInterface>(defaultData);

const  GlobalContext:React.FC<Props> = ({children}) => {
    const [foodData, setfoodData] = useState<Array<string>>([]);
    const [allFood, setallFood] = useState<Array<Food>>([])
  return (
      
    <GlobalContextData.Provider value={{foodData,setfoodData,allFood,setallFood}}>{children}</GlobalContextData.Provider>
  )
}

export default GlobalContext