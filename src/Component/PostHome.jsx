import React, { useState } from 'react';
import './styles/Post.css';
import { Avatar} from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import kola from '../img/kola.jpg';

export default function PostHome(props,{image_post, comments, tweets, likes, uploads}) {
  
const [optionsOpen, setOptionsOpen] = useState(true);

  const options=()=> {
    setOptionsOpen((p) => !p);
    
  }
  function handleDelete() {
    props.onDelete(props.id);
  }


 
  return (
    <div className='Post__container'>
    <Avatar src={kola}/>
    <div className='Post__content'>
         <div className='Post__heading'>
            <div className='Post_tvu'>
                <div><h3>Kola</h3></div>
                <VerifiedUserIcon/>
                <div><p>@kola</p></div>

            </div>

            <div className='options__container'>
                <MoreHoriz onClick={options}/>
                <div className={`${optionsOpen ? 'options ': 'options options__open' } `}>
                  
                    <h5 onClick={handleDelete}>delete</h5>
                    <h5>edit</h5>


                  </div>
                

            </div>
            


         </div>
         <div className="Post__body">
            <p className='contentpost__body'>{props.content}</p>
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
