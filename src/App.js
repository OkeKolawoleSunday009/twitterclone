import './App.css';
import React, { Component } from 'react';
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import SideBar from './Component/SideBar';
import Search from './Component/Search';
import PostView from './Component/PostView';
import Recommendations from './Component/Recommendations';



export class App extends Component {

   handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };
  render() {
    return (
      <div className='Home'>
        <Router>
            <SideBar/>
          
            <Routes>
               
              <Route path="/" element={<Recommendations />}/>
              <Route path="/PostView" element={<PostView/>}/>
            </Routes>
   
            <Search/>
        </Router>
        
      </div>
    )
  }
}

export default App
