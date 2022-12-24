import React from 'react'
import './styles/SideBar.css'

export default function Profile({image, title, username, Icon}) {
  return (
    <div className='profile__container'>
    <img className='imgclass'  src={image} alt="profilepics"/>

    <div className='profile__content'>
        <div className='title__head'>
                <h4>{title}</h4>
                <Icon/>
        </div>
        
        <p>{username}</p>
    </div>  
 

        
    </div>
  )
}
