import React from 'react'
import './styles/Trend.css'
import './styles/config.css'
import MoreHoriz from '@mui/icons-material/MoreHoriz';

export default function Trend({trending, type, title, tweetnumber}) {
  return (
    <div className='Trend'>
        <div className='trend__box'>
            <div className='trend__type'>
                <p >{type}</p> . <p>{trending}</p>
            </div>

             <MoreHoriz/>         
        
        </div>
        <div>
            <h4>{title}</h4>
        </div>
        <div>
            <p>{tweetnumber}</p>
        </div>
        
    </div>
  )
}
