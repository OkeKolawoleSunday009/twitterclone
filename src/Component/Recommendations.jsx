import React from 'react'
import './styles/Recommendations.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Tweet from './Tweet';
import kola from '../img/kola.jpg'
import Post from './Post';


export default function Recommendations() {
  return (
    <div className='Recommendations'>
      <div className='Home__button'>
        <h3>Home</h3>
        <StarOutlineIcon className='icon'/>
      </div>
      <hr />

            
      <Tweet image={kola}/>
      <hr style={{border: "7px solid  #9c9c9c !important;"}}/>

      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
       
      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>

       
      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
        
      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
       
      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
      
      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
       
      <Post title="NetFlix Nigeria"
      username="@NetflixNigeria"
      content="The doors of the academy are open, class are now in session #farfromhome is now on NetFlix "
      comments="20"
      tweets="252" likes="100" uploads="1"/>
      
      </div>
  )
}
