import {React, useEffect, useState }from 'react'
import './App.css'
// import React, { Component } from 'react';
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import PostView from './Component/PostView'
import RandomPost from './Component/RandomPost'
import Recommendations from './Pages/Recommendations'
import Search from './Pages/Search'
import SideBar from './Pages/SideBar'




export default function App() {
  const [ContentName, setContentName] = useState("")

  function deletePosts (id){
      
    var index = RandomPost.map(function(e){
     return (e.id)
    }).indexOf(id);
   RandomPost.splice(index,1);
   // this.history('/');
 
 
 }
 function editPost(post){
  console.log(post)
  //  var displayContent;
  //  var index = RandomPost.map(function(e){
  //    return (e.id)
  //   }).indexOf(id);
  //   var PostContent =  RandomPost[index];
  //   PostContent.ContentName = content;
    // console.log(index, content)
  //   localStorage.getItem('content') 
  //  return content;


 }


 
 
  return (
    <div className='Home'>
      <Router>
          <SideBar/>
        
          <Routes>
             
            <Route path="/" element={
            <Recommendations 
             onDelete={deletePosts}
            //  onEdit={editPost}
             
             />}/>
            <Route path="/PostView" element={ <PostView
             />
            }/>
          </Routes>
 
          <Search/>
      </Router>
      
    </div>
  )
}
