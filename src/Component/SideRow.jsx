import React from 'react'
import './styles/SideBar.css'
import './styles/config.css'


export default function SideRow({selected, title, Icon}) {

 

  return (
    <div className={`sideContainer ${selected && "selected"}`}>
        <Icon className="sidebar__icon"/>
        <h3 className='sidebar__title'>{title}</h3>

    </div>
  )
}
