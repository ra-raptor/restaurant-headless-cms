import { IGatsbyImageData } from "gatsby-plugin-image"

export interface checkbox_handler_type{
    target : {
      checked : boolean
    }
}

export interface range_handler_type{
    target : {
      value : string
    }
}
export interface textinput_handler_type{
    target : {
      value : string
    }
}

export interface ContextInterface {
    foodData: Array<string>,
    setfoodData : (foodData : Array<string>) => void,
    allFood : Array<Food>,
    setallFood : (allFood : Array<Food>) => void
  }

export interface Food {
  name : string,
  id : string,
  category : string,
  price : number,
  image : IGatsbyImageData
  veg: boolean
}



export interface graphqlDataType{
    node : {
      itemName : string,
      veg : boolean,
      id : string,
      nutrition : Array<string>,
      price : number,
      category : string,
      image : {
        id : string,
        gatsbyImageData : IGatsbyImageData
      }
      subtext : {
        raw : string
      }
    }
  }
  
export  interface catitemType{
      node : {
        category: string,
        id: string
        itemName: string
        price: number
        veg: boolean
        image : {
          id : string,
          gatsbyImageData : IGatsbyImageData
        }
    }
  }
  
  
  
export  interface FilterInterface{
    categories : Array<String>,
    low : number,
    high : number,
    veg: boolean
  
  }

 export interface ItemType{
    node : {
        id : string,
        childImageSharp : {
            fixed : IGatsbyImageData
        }
    }
}

export interface CardInterface  {
    url : Array<ItemType>,
    name : string,
    date : string,
    text : string

}



export interface CardType{
    node : {
      itemName : string,
      veg : boolean,
      id : string,
      price : number,
      category : string,
      subtext : {
        raw : string
      },
      nutrition : Array<string>,
      image : {
        id : string,
        gatsbyImageData : IGatsbyImageData
      }
      
    }
  }
  
 export interface CardElType{
    card : CardType,
    id : string
  }

 export interface AboutCardType {
 
    title: string;
    subtext: string;
  }

  export interface CListInterface{
    category : string,
    value : boolean

  }

  export interface SearchInterface{
    serachText: string,
    search : () => void,
    setserachText : (searchText : string) => void
    setserachVisible : (serachVisible : boolean) => void
}

export interface SidebarInterface{
  categories : Array<string>,
  catValues : Array<string>,
  val1 : number,
  val2 : number,
  check : boolean,
  setcatValues : (catValues : Array<string>) => void,
  setval1 : (val1 : number) => void,
  setval2 : (val2 : number) => void,
  setcheck : (check : boolean) => void,
  filter : (categories:Array<string>,low:number,high:number,veg:boolean) => void,
  checkboxValue : (data : string) => boolean,
  setcheckList : (data : Array<CListInterface>) => void,
  checkList : Array<CListInterface>

}

export interface serachSugegstionInterface{
  arr : Array<string>,
  pickSerach : (word: string) => void
}

export interface Food {
  name : string,
  id : string,
  category : string,
  price : number,
  image : IGatsbyImageData,
  veg: boolean
}

export interface ContextInterface {
  foodData: Array<string>,
  setfoodData : (foodData : Array<string>) => void,
  allFood : Array<Food>,
  setallFood : (allFood : Array<Food>) => void
}

export interface Props {
}