import React, { useState } from 'react'
import './styles/Recommendations.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Tweet from './Tweet';
import kola from '../img/kola.jpg';
import Post from './Post';
import PostHome from './PostHome';


export default function Recommendations() {
  const [tweets, setTweets]= useState([]);

  function addTweet(tweet){
   setTweets(prevTweets =>{
    return [...prevTweets, tweet];
   });

  }

  function deleteTweet(id){
    setTweets(prevTweets =>{
      return prevTweets.filter((tweetNote, index) => {
        return  (index !== id);
      });
    });
  }

  return (
    <div className='Recommendations'>
      <div className='Home__button'>
        <h3>Home</h3>
        <StarOutlineIcon className='icon'/>
      </div>
      <hr />

            
      <Tweet image={kola} addTweet={addTweet}/>
      <hr style={{border: "7px solid  #9c9c9c !important;"}}/>
 
       {tweets.map((tweetNote, index) => {
          return <PostHome
           key={index}
           id ={index}
           content ={tweetNote.content}
           onDelete= {deleteTweet} />
       })}

    

      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
       
      
      
      </div>
  )
}
