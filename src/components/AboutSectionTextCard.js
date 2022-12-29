import React from 'react'

export const AboutSectionTextCard = (props) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
        <div className='text-center p-3 d-flex flex-column justify-content-center align-items-center'>
            <h4 style={{color: "#103F54"}}>{props.title}</h4>
            <p className='col-8'>{props.text}</p>
        </div>
    </div>
  )
}
