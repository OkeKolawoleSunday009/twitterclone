import React from 'react'
import './styles/Search.css';
import './styles/config.css';
import SearchIcon from '@mui/icons-material/Search';
import Trend from './Trend';
import WhoToFollow from './WhoToFollow';

export default function Search() {
  return (
    <div className='Search'>
      <div className='search__box'>
          <input  type="text" className='search__button' placeholder="Search Twitter" />
           <div className='searchicon__box'>
           <SearchIcon className='search__icon'/>

           </div>
        

      </div>
      <div className='Trends'>
        <h2>Trends For You</h2>
        <Trend 
        type="Sports"
        trending="trending"
        title="Sancho"
        tweetnumber="10.3k Tweets"/>
 
       <Trend 
        type="Sports"
        trending="trending"
        title="Delle Alli"
        tweetnumber="267.3k Tweets"/>

       <Trend 
        type="Sports"
        trending="trending"
        title="Enzo"
        tweetnumber="94.3k Tweets"/>
        

        <Trend 
        type="Trending in Nigeria"
        trending=""
        title="IT IS DONE"
        tweetnumber="267.3k Tweets"/>
 
      </div>
      <div className='whotofollow'>
         <h2>Who to follow</h2>
         <WhoToFollow
         title="JK MAN"
         username="@jk_magaplus"/>
         <WhoToFollow
          title="AKMAN|CRYPTO"
          username="@Akman"/>

         <WhoToFollow
         title="JK MAN"
         username="@jk_magaplus"/>
         <WhoToFollow
          title="AKMAN|CRYPTO"
          username="@Akman"/>


      </div>
      
      </div>
  )
}
