import React, { useState } from 'react'
import './styles/Recommendations.css';
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
import SideRow from './SideRow';
import { Avatar } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Profile from './Profile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import styles from './styles/styles.module.css'
import { useNavigate } from 'react-router-dom';


export default function Recommendations(props) {
  const [tweets, setTweets]= useState([]);

  let history = useNavigate();
  const [optionsOpen, setOptionsOpen] = useState(true);

  const options =()=> {
    setOptionsOpen((p) => !p);
    console.log('clicked');
    
  }

  const ProfilePhoto =()=>{
    return <div>
      <Avatar src={kola} alt="profile photo"/>
    </div>
  } 

  const Nav = ()=>{
    return <div className='Nav_mobile'>
     <SideRow Icon={HomeIcon} />
     <SideRow Icon={SearchIcon}/>
     <SideRow  Icon={NotificationsNoneIcon}/>
     <SideRow  Icon={MailOutlineIcon} />
     
    </div>
  }

  const MobileNav =()=>{
    return <div className='MobileNav' >
             <Profile image={kola} title="kola" username="@okekolawoleSun3" Icon={MoreHorizIcon}  />
             <hr className={styles.hr}/>
             <SideRow  Icon={PermIdentityIcon} title="Profile"/>
             <SideRow  Icon={MessageOutlinedIcon} title="Topics"/>
             <SideRow  Icon={TurnedInNotIcon} title="Bookmarks"/>
             <SideRow  Icon={ListAltIcon} title="Lists"/>
             <SideRow  Icon={PersonAddAltOutlinedIcon} title="Twitter Circle"/>
             <hr className={styles.hr}/>

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
  };
  // function editTweet(id){
  //   setTweets(prevTweets =>{
  //      var result = prevTweets.filter((tweetNote, index) => {
                  
  //       return (console.log((index === id),  (tweetNote.content)), (tweetNote))
  //     });
  //    return   result.find(({ content}) => content === true);  
   

  //     });
     
            
    // };

    function deletePost(id){
      
    
         var index = RandomPost.map(function(e){
          return (e.id, console.log(e.id))
         }).indexOf(id);
        RandomPost.splice(index,1);

        history(`/`);

        

    }

    


  // function deletePost(id){
  //   setPosts(prevPosts =>{
  //     return prevPosts.filter((post, index) => {
  //       return  (index !== id);
  //     });
  //   });
  // };



  function editPost(id){

  }


  return (
    <div className='Recommendations'>
      <div className='Home__button'>
        <h3 className='button_home'>Home</h3>

        <div className={`${optionsOpen ? 'sideNavBar__home ': 'sideNavBar__home sideNavBar__home__open' } `}>
          <MobileNav/>
        </div>

         <div onClick={options} className="ProfilePhoto">
             <ProfilePhoto/>
         </div>
       
        <img className=" twitter__logo__home" src={twitterbird} alt="twitter logo"/>
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
           onDelete= {deleteTweet} 
          //  onEdit= {editTweet}
          //  onShow={showTweet}
          />
       })}

    
       {RandomPost.map((post, index ) => {
         return <Post 
             key ={index}
             id={post.id}
             title={post.title}
             content={post.content}
             comments={post.comments}
             tweets={post.tweets}
             likes={post.likes}
             uploads={post.uploads}
             username={post.username}
             onEdit= {editPost}
             onDelete = {deletePost}
           />
          //  
       } )} 

       {/* <Post key={1} title={t}  /> */}

       <div className='postNew__tweet'>+</div>

       <Nav/>
      
       
      
      
      </div>
  )
}
