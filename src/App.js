import './App.css';
import React, { Component } from 'react';
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import PostView from './Component/PostView';
import RandomPost from './Component/RandomPost';
import Recommendations from './Pages/Recommendations';
import Search from './Pages/Search'
import SideBar from './Pages/SideBar'
// import { useNavigate } from 'react-router-dom';


export class App extends Component {


  handleRefresh = () => {
   // by calling this method react re-renders the component
   this.setState({});
 };
//  history = useNavigate();
 deletePosts = (id) =>{
      

   
   var index = RandomPost.map(function(e){
    return (e.id)
   }).indexOf(id);
  RandomPost.splice(index,1);
  // this.history('/');


}
editPost(id, content){
  var displayContent;
  var index = RandomPost.map(function(e){
    return (e.id)
   }).indexOf(id);
   var PostContent =  RandomPost[index];
   PostContent.content = content;
   displayContent = content;

   console.log(index, 'clicked',displayContent)
  return displayContent;
  // localStorage.setTweets('content', content)

}





  render() {
    return (
      <div className='Home'>
        <Router>
            <SideBar/>
          
            <Routes>
               
              <Route path="/" element={
              <Recommendations 
               onDelete={this.deletePosts}
               onEdit={this.editPost}
               
               />}/>
              <Route path="/PostView" element={ <PostView
              onEdit={this.editPost} />
              }/>
            </Routes>
   
            <Search/>
        </Router>
        
      </div>
    )
  }
}

export default App
