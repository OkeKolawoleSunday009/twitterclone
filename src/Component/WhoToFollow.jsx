import { Avatar, Button } from '@mui/material'
import React from 'react';
import './styles/Whotofollow.css'


export default function WhoToFollow({image, title, username, promoted, verified}) {
  return (
    <div className='whotofollow__container'>
        <Avatar src={image} className="avatar"/>
        <div className='who__content'>
            <div>
                <h3>{title} {" "}</h3> {" "}{verified}

            </div>
            <div>
                <p>{username}</p>
            </div>
            <div>
                <p>{promoted}</p>
            </div>


        </div>
        <Button variant="contained" className='follow'>follow</Button>
    </div>
  )
}
