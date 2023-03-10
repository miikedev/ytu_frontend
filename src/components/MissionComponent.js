import React from 'react'
import { missions } from '../data/Data'
import MissionPhoto from '../section/photos/MissionPhoto.png'
import './MissionComponent.css'
export const MissionComponent = (props) => {
  const data=props
  return (
    <div className='text d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center'>
        <p>{data.description}</p>
        <img className='col-lg-4 col-md-4 col-12' src={data.photo}/>
    </div>
  )
}
