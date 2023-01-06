import { Avatar, Button } from '@mui/material';
import {React, useEffect} from 'react';
// import RandomPost from './RandomPost';
import './styles/PostView.css';
// import { useNavigate } from 'react-router-dom';




export default function PostView({ id,editPost, content }) {

  // let history = useNavigate();

  // console.log(props.displayContent)


  // history(`/`);'
 
  // editPost(content);
  // console.log(content);



 


  // const subEdit =(e)=>{
  //   // e.preventDefault();
  //   // var a =  RandomPost[index];
  //   // a.content = content;
  //   // console.log(content)
  // }




  

  
  return (
    <div className='PostView'>
        <h3>Tweet</h3>
        
       <div className="post__tweet">
         <div className="profile__tweet">
            <Avatar/>
           
            <div className="div"> 
            <textarea
            //  value ={editPost}
            //  onChange = {show}


             />
            {/* {displayContent} */}

             <Button >Edit</Button>

           
            </div>


         </div>

       </div>
        
   </div>
  )
}
