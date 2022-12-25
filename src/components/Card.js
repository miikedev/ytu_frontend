import React from 'react'
import './Card.css'
export const Card = (props) => {
  return (
    <div className='text col-12'>
        <div className='d-flex justify-content-lg-center justify-content-sm-around align-items-center col-lg-9 col-md-8 col-sm-10 p-2'>
            <h3 className='col-lg-4 col-sm-8' style={{color: "#103F54", fontWeight: "600"}}>       
                {props.title}
            </h3>
            <div className='line'></div>
        </div>
        <div className='col-12'>
            {props.content}
        </div>
    </div>
  )
}

        