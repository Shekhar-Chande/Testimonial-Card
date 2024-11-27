import React from 'react'
import thumbnail from '../assets/profile-thumbnail.png'
import './TestimonialCard.css'
function TestimonialCard({name, handle, objective}) {
  return (
    <>
        <div className="container">
            <div className="profile">
               <img src={thumbnail} alt="" />
               <div className='profile-info'> 
                  <span className='name'>{name}</span>
                  <span className='handle'>{handle}</span>
               </div>
            </div>
            <p>{objective}</p>
        </div>
    </>
  )
} 

export default TestimonialCard