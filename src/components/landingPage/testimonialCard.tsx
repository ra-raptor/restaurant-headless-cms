import React from 'react'

interface CardInterface  {
    url : string,
    name : string,
    date : string,
    text : string

}
function TestimonialCard({url,name,date,text}:CardInterface) {
    
  return (
    <div className='testi-card'>
        <img src={url} alt="pic" width={100} height={100} />
        <div className="details">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="review">{text}</div>
        </div>
    </div>
  )
}

export default TestimonialCard