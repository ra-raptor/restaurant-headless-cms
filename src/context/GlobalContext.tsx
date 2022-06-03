import { IGatsbyImageData } from 'gatsby-plugin-image';
import React,{useState,createContext} from 'react'


interface Food {
  name : string,
  id : string,
  category : string,
  price : number,
  image : IGatsbyImageData,
  veg: boolean
}

interface ContextInterface {
  foodData: Array<string>,
  setfoodData : (foodData : Array<string>) => void,
  allFood : Array<Food>,
  setallFood : (allFood : Array<Food>) => void
}




const defaultData:ContextInterface = {
  foodData: [],
  allFood: [],
  setallFood : () => {},
  setfoodData: () => {},
}

export const GlobalContextData = createContext<ContextInterface>(defaultData);

interface Props {
}





const  GlobalContext:React.FC<Props> = ({children}) => {
    const [foodData, setfoodData] = useState<Array<string>>([]);
    const [allFood, setallFood] = useState<Array<Food>>([])
  return (
      
    <GlobalContextData.Provider value={{foodData,setfoodData,allFood,setallFood}}>{children}</GlobalContextData.Provider>
  )
}

export default GlobalContext