import React from 'react';
import './styles/Post.css';
import { Avatar, Button } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function Post({image,image_post, title,username, content, comments, tweets, likes, uploads}) {
  return (
    <div className='Post__container'>
    <Avatar src={image}/>
    <div className='Post__content'>
         <div className='Post__heading'>
            <div className='Post_tvu'>
                <div><h3>{title}</h3></div>
                <VerifiedUserIcon/>
                <div><p>{username}</p></div>

            </div>

            <div>
                <MoreHoriz/>
            </div>
            


         </div>
         <div className="Post__body">
            <p className='contentpost__body'>{content}</p>
         </div>

         <div>
            {image_post}
         </div>
         <div className="Post__icon">
            <div className="comment button_post">
              <ChatBubbleOutlineIcon/>
              <p>{comments}</p>
            </div>
            <div className="tweets button_post">
                <MarkChatUnreadIcon/>
              <p>{tweets}</p>
            </div>
            <div className="likes button_post">
              <FavoriteBorderIcon/>
              <p>{likes}</p>
            </div>

            <div className="uploads button_post">
            <FileUploadIcon/>
              <p>{uploads}</p>
            </div>

           
            
           
           


         </div>
        
 

    </div>
 </div>
  )
}
