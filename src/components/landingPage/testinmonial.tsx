import React from 'react'
import './testimonial.scss'

import {StaticImage} from 'gatsby-plugin-image'


import {users} from './users';
function Testinmonial() {
    

  return (
    <div className='testimonial-wrapper'>
        <h3>Testimonial</h3>
        <h4>What our Customers say?</h4>
        <div className='hr' ></div>
        <div className='card-wrapper'>
            {/* {users.map((user)=>{
                const href = edges.filter((item:ItemType) => item.node.childImageSharp.fixed.originalName == user.url)
               return  <TestimonialCard date={user.date} name={user.name} url={href} text={user.text} key={user.id}/>
            })} */}
            {/* <TestimonialCard date='25th Jan 2022' text={text} name={} /> */}

            <div className='testi-card'>
                <div className="image-wrapper">
                    <StaticImage alt='dp' src='../../images/testimonial-user-pics/41.jpg'/>
                </div>
                <div className="details">
                    <div className="name">{users[0].name}</div>
                    <div className="date">{users[0].date}</div>
                    <div className="review">{users[0].text}</div>
                </div>
            </div>
            <div className='testi-card'>
                <div className="image-wrapper">
                    <StaticImage alt='dp' src='../../images/testimonial-user-pics/92.jpg'/>
                </div>
                <div className="details">
                    <div className="name">{users[1].name}</div>
                    <div className="date">{users[1].date}</div>
                    <div className="review">{users[1].text}</div>
                </div>
            </div>
            <div className='testi-card'>
                <div className="image-wrapper">
                    <StaticImage alt='dp' src='../../images/testimonial-user-pics/72.jpg'/>
                </div>
                <div className="details">
                    <div className="name">{users[2].name}</div>
                    <div className="date">{users[2].date}</div>
                    <div className="review">{users[2].text}</div>
                </div>
            </div>
            <div className='testi-card'>
                <div className="image-wrapper">
                    <StaticImage alt='dp' src='../../images/testimonial-user-pics/76.jpg'/>
                </div>
                <div className="details">
                    <div className="name">{users[3].name}</div>
                    <div className="date">{users[3].date}</div>
                    <div className="review">{users[3].text}</div>
                </div>
            </div>
            <div className='testi-card'>
                <div className="image-wrapper">
                    <StaticImage alt='dp' src='../../images/testimonial-user-pics/1.jpg'/>
                </div>
                <div className="details">
                    <div className="name">{users[4].name}</div>
                    <div className="date">{users[4].date}</div>
                    <div className="review">{users[4].text}</div>
                </div>
            </div>
            <div className='testi-card'>
                <div className="image-wrapper">
                    <StaticImage alt='dp' src='../../images/testimonial-user-pics/50.jpg'/>
                </div>
                <div className="details">
                    <div className="name">{users[5].name}</div>
                    <div className="date">{users[5].date}</div>
                    <div className="review">{users[5].text}</div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Testinmonial