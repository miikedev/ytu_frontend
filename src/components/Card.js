import React from 'react'
import './Card.css'
export const Card = (props) => {
  return (
    <div className='text col-12'>
        <div className='d-flex flex-lg-row flex-md-row flex-column align-items-center justify-content-between p-1'>
            <h3 className='' style={{color: "#103F54", fontWeight: "600"}}>       
                {props.title}
            </h3>
            <div className='col-9'>
              <div className='line col-12'></div>
            </div>
        </div>
        <div className='col-12'>
            {props.content}
        </div>
    </div>
  )
}

        