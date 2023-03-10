import React from 'react'
import './OutlineBtn.css'
export const OulineBtn = (props) => {
  return (
    <button className='donate-btn'>
        {props.btnName}
    </button>
  )
}
