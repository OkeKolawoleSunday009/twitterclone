import React, { useState } from 'react';
import './styles/Post.css';
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';

export default function Post(props) {
    

  const [optionsOpen, setOptionsOpen] = useState(true);

  const options=()=> {
    setOptionsOpen((p) => !p);
    
  }
  function deletePost(){
    props.onDelete(props.id);
    console.log('clicked');
  }
  function editTweet(){
   
  }

  
  return (
    <div className='Post__container'>
    <Avatar src={props.image}/>
    <div className='Post__content'>
         <div className='Post__heading'>
            <div className='Post_tvu'>
                <div><h3>{props.title}</h3></div>
                <VerifiedUserIcon/>
                <div><p>{props.username}</p></div>

            </div>

            <div>
                <MoreHoriz onClick={options}/>
                <div className={`${optionsOpen ? 'options ': 'options options__open' } `}>
                  
                  <h5 onClick={deletePost}>delete</h5>
                  <Link  to ={`/PostView`}>
                     <h5 onClick={editTweet}>edit</h5>
                  </Link>
               


                </div>
            </div>
            


         </div>
         <div className="Post__body">
            <p className='contentpost__body'>{props.content}</p>
         </div>

         <div>
            {props.image_post}
         </div>
         <div className="Post__icon">
            <div className="comment button_post">
              <ChatBubbleOutlineIcon/>
              <p>{props.comments}</p>
            </div>
            <div className="tweets button_post">
                <MarkChatUnreadIcon/>
              <p>{props.tweets}</p>
            </div>
            <div className="likes button_post">
              <FavoriteBorderIcon/>
              <p>{props.likes}</p>
            </div>

            <div className="uploads button_post">
            <FileUploadIcon/>
              <p>{props.uploads}</p>
            </div>

           
            
           
           


         </div>
        
 

    </div>
 </div>
  )
}
