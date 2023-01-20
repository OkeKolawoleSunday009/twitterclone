import {  React, useState} from 'react';
import './styles/Post.css';
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useNavigate } from 'react-router-dom';
// import PostView from './PostView';

export default function Post({ onDelete, onEdit, post}) {
  const navigate = useNavigate();

  const [optionsOpen, setOptionsOpen] = useState(true);
  const options=()=> {
    setOptionsOpen((p) => !p);
    
  }
  function deletePost(){
    onDelete(post.id, post.content);
    // console.log('clicked');
  }


  // function editPost(){
  //  onEdit(post);
  //  console.log(content)
  
  //  setDisplayContent(displayContent);
  //  localStorage.setItem('DisplayContent', content);
 
  // }

  


  
  return (
    <div className={`Post__container `} >
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
                  {/* <Link  to ={`/PostView`}> */}
                     <h5 onClick={onEdit}>edit</h5>
                  {/* </Link> */}
               


                </div>
            </div>
            


         </div>
         <div className="Post__body" onClick={()=> navigate('/PostView')}>
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
