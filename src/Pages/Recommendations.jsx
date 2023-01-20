import React, { useState } from 'react'
import '../Component/styles/Recommendations.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Tweet from '../Component/Tweet';
import kola from '../img/kola.jpg';
import Post from '../Component/Post';
import PostHome from '../Component/PostHome';
import RandomPost from '../Component/RandomPost';
import twitterbird from '../img/twitterbird.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SideRow from '../Component/SideRow';
import { Avatar } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Profile from '../Component/Profile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import styles from '../Component/styles/styles.module.css'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import PostView from './PostView';
// import PostView from './PostView';


export default function Recommendations({onEdit, onDelete}) {
  const navigate = useNavigate()
  const [tweets, setTweets]= useState([]);
  const [postContent, setPostContent] = useState('');

  // let history = useNavigate();
  const [optionsOpen, setOptionsOpen] = useState(true);

  const options =()=> {
    setOptionsOpen((p) => !p);
    console.log('clicked');
    
  }

  const handleEdit = (post) =>{
    console.log(post.content, "clicked");
    setPostContent(post.content);
   
    
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
    function editTweet(id, content){
      // localStorage.setTweets('content', content)
      var index = tweets.map(function(e){
        return (e.id)
       }).indexOf(id);
      //  var PostContent =  tweets[index];
      //  PostContent.content = content;
  
       console.log(index, 'clicked')

    }
    function onSDelete(id, content){
      onDelete(content, id)
      navigate('/')
    }
    //post from random post
   
    const Gost = (
      RandomPost.length
      ?(  
        RandomPost.map((post, index ) => {
         return <Post 
               key ={index}
               post={post}
               onEdit= {() => handleEdit(post)}
               onDelete = {onSDelete}
               
             /> }
          )

      ): "No Random  Post yet"
    )

    const GostPrivate = (
      tweets.length
      ?( tweets.map((tweetNote, index) => {
        return <PostHome
         key={index}
         id ={index}
         content ={tweetNote.content}
         onDelete= {deleteTweet} 
         onEdit= {() => handleEdit(tweetNote)}

        //  onShow={showTweet}
        />
     })

      ): ""
    )
    

  



  return (
    <div className='Recommendations'>

      {/* {postContent && postContent} */}
    
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
      

      <div style={{textAlign:"center", fontSize:"20px"}}>
       {GostPrivate}
       </div>
       
      <div style={{textAlign:"center", fontSize:"20px"}}>
            {Gost}

       </div>

      

       {/* <Post key={1} title={t}  /> */}

       <div className='postNew__tweet'>+</div>

       <Nav/>
      
     {/* <PostView
     onEdit={editPost}/> */}
      
      </div>
  )
}
