import { Avatar, Button } from '@mui/material'
import React from 'react';
import './styles/config.css'
import './styles/Tweet.css';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Tweet({image}) {
  return (
    <div className='Tweet__container'>
       <Avatar src={image}/>
       <div className='Tweet__content'>
            <div className="input__section">
               <input className='input__hometweet' type="text" placeholder='Whats happening?'/>
            </div>

            <div className='icon__tweet'>
                 <div className="icon__section">
                 <CropOriginalIcon className='icon_tweethome'/>
                 <GifBoxIcon className='icon_tweethome'/>
                 <InsertEmoticonIcon className='icon_tweethome'/>
                </div>

                <Button variant="contained" className='tweet__home'>Tweet</Button>

            </div>
           
    

       </div>
    </div>
  )
}
