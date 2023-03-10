import React from 'react'
import './Card.css'
export const PageTitle = (props) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-wrap text-center text text-color'>{props.pageTitle}</h3>
        <div className='d-flex gap-1'>
            <div className='title-underline'></div>
            <div className='title-underline'></div>
            <div className='title-underline'></div>
            <div className='title-underline'></div>
        </div>
    </div>
  )
}
