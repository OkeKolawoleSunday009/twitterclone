import React from 'react';
import SideRow from './SideRow';
import './styles/SideBar.css'
import './styles/config.css'
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import twitterbird from '../img/twitterbird.png'
import { Button } from '@mui/material';
import Profile from './Profile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import kola from '../img/kola.jpg'
import { Link } from 'react-router-dom';


export default function SideBar() {

  
  
  return (
    <div className='sideBar'>
      <img className=" twitter__logo"src={twitterbird} alt="twitter logo"/>
      <Link to ={`/`}  style={{textDecoration:"none", color: "black"}}>
         <SideRow selected Icon={HomeIcon} title="Home" className="side__row"/>

      </Link>
     <SideRow  Icon={TagIcon} title="Explore"/>
     <SideRow  Icon={PeopleIcon} title="Communities"/>
     <SideRow  Icon={NotificationsNoneIcon} title="Notifications"/>
     <SideRow  Icon={MailOutlineIcon} title="Messages"/>
     <SideRow  Icon={BookmarksIcon} title="Bookmarks"/>
     <SideRow  Icon={PermIdentityIcon} title="Profile"/>
     <SideRow  Icon={ MoreHorizIcon} title="More"/>
     <Button variant="contained" className='tweet'>Tweet</Button> 
     <Profile image={kola} title="kola" username="@okekolawoleSun3" Icon={MoreHorizIcon}  />
   
        </div>
  
  )

}
