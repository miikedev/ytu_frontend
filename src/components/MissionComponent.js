import React from 'react'
import { missions } from '../data/Data'
import MissionPhoto from '../section/photos/MissionPhoto.png'
import './MissionComponent.css'
export const MissionComponent = (props) => {
  const data=props
  return (
    <div className='text d-flex flex-lg-row flex-md-row flex-column justify-content-lg-center align-items-center px-lg-3 px-md-3 gap-2'>
        <p className='col-lg-6 col-md-7 col-12'>{data.description}</p>
        <div className='col-lg-5 col-md-5 col-11'> 
          <img className='col-12' src={data.photo}/>
        </div>
    </div>
  )
}
