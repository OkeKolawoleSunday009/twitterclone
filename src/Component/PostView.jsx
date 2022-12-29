import { Avatar } from '@mui/material';
import React from 'react';
import './styles/PostView.css';


export default function PostView(props) {

    // function showTweet (){
    //     // props.onEdit(tweet)
    //     props.onShow(props.id)
    //     console.log(props.content)
    // }
  
  return (
    <div className='PostView'>
        <h3>Tweet</h3>
        
       <div className="post__tweet">
         <div className="profile__tweet">
            <Avatar/>
            <div className="div"> 
            {/* {showTweet} */} 
              {/* <textarea
              
               value={showTweet}

              /> */}
            </div>


         </div>

       </div>
        
   </div>
  )
}
