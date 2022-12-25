import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react';
import './styles/config.css'
import './styles/Tweet.css';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import kola from '../img/kola.jpg';

  
export default function Tweet(props) {

  const [tweetPost, setTweetPost] = useState({
    content: ''
  });

  const handleChange =(event)=> {
    
    setTweetPost(prevTweet => {
      return {
        ...prevTweet,
         content: event.target.value
      }
    })
    // console.log(value);
  }
 const handleSubmit = (event) => {
  
  props.addTweet(tweetPost);
  setTweetPost({
      content: ""
  });
  event.preventDefault();
  


 }

  return (
    <div className='Tweet__container'>
      <form>
       <Avatar src={kola}/>
       <div className='Tweet__content'>
           
            <div className="input__section">
               <input 
               onChange={handleChange}
               value ={tweetPost.content}
               className='input__hometweet' 
               type="text" 
               placeholder='Whats happening?'/>
            </div>

            <div className='icon__tweet'>
                 <div className="icon__section">
                 <CropOriginalIcon className='icon_tweethome'/>
                 <GifBoxIcon className='icon_tweethome'/>
                 <InsertEmoticonIcon className='icon_tweethome'/>
                </div>

                <Button onClick={handleSubmit} variant="contained" className='tweet__home'>Tweet</Button>

            </div>
           
    

       </div>
       
       </form>
    </div>
  )
}
