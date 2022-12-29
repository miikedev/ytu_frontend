import React from 'react'
import { missions } from '../data/Data'
import MissionPhoto from '../section/photos/MissionPhoto.png'
import './MissionComponent.css'
export const MissionComponent = () => {
  
  return (
    <div className='text d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center'>
        <ul className='col-lg-7 col-md-7 col-sm-12 p-4'>
            {missions.map((mission,index) => <li key={index}>{mission}</li>)}
        </ul>
        <img className='col-lg-4 col-md-4 col-12' src={MissionPhoto}/>
    </div>
  )
}
