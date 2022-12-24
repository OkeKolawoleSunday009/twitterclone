import React from 'react'
import Search from './Search'
import SideBar from './SideBar'
import Recommendations from './Recommendations'
import './styles/Home.css'

export default function Home() {
  return (
    <div className='Home'>
        
        <SideBar />
        <Recommendations />
        <Search />
        
    </div>
  )
}
