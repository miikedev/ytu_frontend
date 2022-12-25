import React from 'react'
import './Card.css'
export const Associations = (props) => {
  return (
    <div>
        <h3 className='text-center text text-color'><u className='underline-style'>{props.associationName}</u></h3>
        
        <div className='mx-auto col-lg-10 col-sm-12 col-md-12 d-flex justify-content-center flex-wrap gap-lg-3 gap-md-5 gap-sm-2 mt-4'>
            {props.component}
        </div>
    </div>
  )
}
