import React, { useState } from 'react'
import './styles/Recommendations.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Tweet from './Tweet';
import kola from '../img/kola.jpg';
import Post from './Post';
import PostHome from './PostHome';
import RandomPost from './RandomPost';
import twitterbird from '../img/twitterbird.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SideRow from './SideRow';




export default function Recommendations() {
  const [tweets, setTweets]= useState([]);
  const [posts, setPosts] = useState([...RandomPost]);

  const Nav = ()=>{
    return <div className='Nav_mobile'>
     <SideRow selected Icon={HomeIcon} />
     <SideRow Icon={SearchIcon}/>
     <SideRow  Icon={BookmarksIcon} />
     <SideRow  Icon={NotificationsNoneIcon}/>
     <SideRow  Icon={MailOutlineIcon} />
     
    </div>
  }

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
  function deletePost(id){
    setPosts(prevPosts => {
      return prevPosts.filter((post, index) =>{
        return  (index !==id);
      })
    })
  }

  return (
    <div className='Recommendations'>
      <div className='Home__button'>
        <h3>Home</h3>
        <img className=" twitter__logo"src={twitterbird} alt="twitter logo"/>
        <StarOutlineIcon className='icon'/>
      </div>
      <hr />

            
      <Tweet image={kola} addTweet={addTweet}/>
      <hr style={{border: "7px solid  #9c9c9c !important"}}/>
 
       {tweets.map((tweetNote, index) => {
          return <PostHome
           key={index}
           id ={index}
           content ={tweetNote.content}
           onDelete= {deleteTweet} />
       })}

    
       {posts.map((post, index) => {
         return <Post 
             key ={index}
             title={post.title}
            
            
            onDeletePost = {deletePost}
           />
          //  
       } )}

       <Nav/>
      
      
       
      
      
      </div>
  )
}
