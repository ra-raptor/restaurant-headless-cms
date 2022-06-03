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

  