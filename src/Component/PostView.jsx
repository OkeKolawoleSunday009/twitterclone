import { Avatar, Button } from '@mui/material';
import {React,useState, useEffect} from 'react';
// import RandomPost from './RandomPost';
import './styles/PostView.css';
// import { useNavigate } from 'react-router-dom';




export default function PostView(props,{ id,contentName, content }) {
  const [name, setName] = useState('')


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
useEffect(() => {
  setName (localStorage.getItem('content'))
 
}, [])
  
  

  
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
            {name}

             <Button  >Edit</Button>

           
            </div>


         </div>

       </div>
        
   </div>
  )
}
