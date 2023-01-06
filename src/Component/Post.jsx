import {  React, useState} from 'react';
import './styles/Post.css';
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';
import PostView from './PostView';

export default function Post({ onDelete, onEdit, id, content, title, image, username, image_post, comments, tweets, likes, uploads}) {
    
  const [optionsOpen, setOptionsOpen] = useState(true);
  // const [displayContent, setDisplayContent] = useState('');
  const options=()=> {
    setOptionsOpen((p) => !p);
    
  }
  function deletePost(){
    onDelete(id, content);
    // console.log('clicked');
  }


  function editPost(){
   onEdit(id,content);
  //  console.log(content)
  
  //  setDisplayContent(displayContent);
  //  localStorage.setItem('DisplayContent', content);
 
  }

 
 

    

      // console.log(contentViewp)

  
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
                <MoreHoriz onClick={options}/>
                <div className={`${optionsOpen ? 'options ': 'options options__open' } `}>
                  
                  <h5 onClick={deletePost}>delete</h5>
                  <Link  to ={`/PostView`}>
                     <h5 onClick={editPost}>edit</h5>
                  </Link>
               


                </div>
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

         <div className="divno">
            <PostView editPost={editPost}/>
       
          </div>

    </div>
 </div>
  )
}
