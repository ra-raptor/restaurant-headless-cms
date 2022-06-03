import React,{useState,createContext} from 'react'

interface ContextInterface {
  foodData: Array<string>,
  setfoodData : (foodData : Array<string>) => void
}


const defaultData:ContextInterface = {
  foodData: ['chai','pani'],
  setfoodData: () => {}
}

export const GlobalContextData = createContext<ContextInterface>(defaultData);

interface Props {
}



const  GlobalContext:React.FC<Props> = ({children}) => {
    const [foodData, setfoodData] = useState<Array<string>>([]);
  return (
      
    <GlobalContextData.Provider value={{foodData,setfoodData}}>{children}</GlobalContextData.Provider>
  )
}

export default GlobalContext