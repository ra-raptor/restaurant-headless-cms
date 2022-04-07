import React from 'react'
import {StaticImage,GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'

/*interface ItemType{
    node : {
        id : string,
        childImageSharp : {
            fixed : {
                base64 : string,
                width : number,
                height : number,
                originalName : string
            }
        }
    }
}*/

interface ItemType{
    node : {
        id : string,
        childImageSharp : {
            fixed : IGatsbyImageData
        }
    }
}

interface CardInterface  {
    url : Array<ItemType>,
    name : string,
    date : string,
    text : string

}
function TestimonialCard({url,name,date,text}:CardInterface) {
    
/*const a = data.allFile.edges[0].node.childImageSharp.fixed.originalName;
console.log(a);*/
const x = url[0].node.childImageSharp;

  return (
    <div className='testi-card'>
        <GatsbyImage alt="dp"  image={x.fixed} />
        <div className="details">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="review">{text}</div>
        </div>
    </div>
  )
}

export default TestimonialCard