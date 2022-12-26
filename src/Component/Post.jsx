import React, { useState, useEffect } from 'react';
import './styles/Post.css';
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function Post(props) {
  const [post, setPost] = useState([
    {
    image : '',
    image_post : '', 
    title : '',
    username : '',
    content : '',
    comments : '', 
    tweets : '', 
    likes : '', 
    uploads: ''
  }

  ]);
  useEffect(() => {
    setPost( prevPost => {
      return {
       ...prevPost
       
      }
  })
  
  }, [])
  // setTweetPost(prevTweet => {
  //   return {
  //     ...prevTweet,
  //      content: event.target.value
  //   }
  const [optionsOpen, setOptionsOpen] = useState(true);

  const options=()=> {
    setOptionsOpen((p) => !p);
    
  }
  function deletePost(){
    props.onDeletePost(post)
  }

  
  return (
    <div className='Post__container'>
    <Avatar src={post.image}/>
    <div className='Post__content'>
         <div className='Post__heading'>
            <div className='Post_tvu'>
                <div><h3>{post.title}</h3></div>
                <VerifiedUserIcon/>
                <div><p>{post.username}</p></div>

            </div>

            <div>
                <MoreHoriz onClick={options}/>
                <div className={`${optionsOpen ? 'options ': 'options options__open' } `}>
                  
                  <h5 onClick={deletePost}>delete</h5>
                  <h5>edit</h5>


                </div>
            </div>
            


         </div>
         <div className="Post__body">
            <p className='contentpost__body'>{post.content}</p>
         </div>

         <div>
            {post.image_post}
         </div>
         <div className="Post__icon">
            <div className="comment button_post">
              <ChatBubbleOutlineIcon/>
              <p>{post.comments}</p>
            </div>
            <div className="tweets button_post">
                <MarkChatUnreadIcon/>
              <p>{post.tweets}</p>
            </div>
            <div className="likes button_post">
              <FavoriteBorderIcon/>
              <p>{post.likes}</p>
            </div>

            <div className="uploads button_post">
            <FileUploadIcon/>
              <p>{post.uploads}</p>
            </div>

           
            
           
           


         </div>
        
 

    </div>
 </div>
  )
}
