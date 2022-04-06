import React,{useState,useEffect} from 'react'
import './testimonial.scss'
import TestimonialCard from './testimonialCard'
import {users} from './users';
function Testinmonial() {
    console.log(users);
    
  return (
    <div className='testimonial-wrapper'>
        <h3>Testimonial</h3>
        <h4>What our Customers say?</h4>
        <div className='hr' ></div>
        <div className='card-wrapper'>
            {users.map((user)=>{
               return  <TestimonialCard date={user.date} name={user.name} url={user.url} text={user.text} key={user.id}/>
            })}
            {/* <TestimonialCard date='25th Jan 2022' text={text} name={} /> */}
        </div>
        <div></div>
    </div>
  )
}

export default Testinmonial