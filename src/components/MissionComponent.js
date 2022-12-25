import React from 'react'
import { missions } from '../data/Data'
import MissionPhoto from '../section/photos/MissionPhoto.png'
import './MissionComponent.css'
export const MissionComponent = () => {
  
  return (
    <div className='col-12 d-flex flex-column flex-lg-row flex-md-row flex-column-reverse align-items-lg-center align-items-start justify-content-center gap-4 text p-2'>
        <ul className='col-lg-6 col-md-7 col-sm-12'>
            {missions.map((mission,index) => <li key={index}>{mission}</li>)}
        </ul>
        <img className='col-lg-3 col-md-4 col-12' src={MissionPhoto}/>
    </div>
  )
}
