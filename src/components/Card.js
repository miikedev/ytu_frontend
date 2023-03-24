import React from 'react'
import './Card.css'
export const Card = (props) => {
  return (
    <div className='text'>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <h3 className='' style={{color: "#103F54", fontWeight: "600"}}>       
                {props.title}
            </h3>
            <div className='col-9'>
              <div className='line col-12'></div>
            </div>
        </div>
        <div className='px-lg-5 px-0'>
            {props.content}
        </div>
    </div>
  )
}

        