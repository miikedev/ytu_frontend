import React from 'react'

export const EducationalSupportContent = ({imgOne, imgTwo, title, date, description}) => {
  return (
    <div className='d-flex flex-wrap justify-content-center gap-3 mb-3'>
        <div className='col-lg-2 col-md-3 col-11'>
            <img className='col-12' src={imgOne}/> <br/>
            <img className='mt-1 col-12' src={imgTwo}/>
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h3 style={{color: "#103F54", fontWeight: 400}}>{title} <span><i className='fw-semibold'>{date}</i></span></h3>
          <p style={{textAlign: "justify"}}>{description}</p>
          <a href='#'>See details</a>
        </div>
    </div>
  )
}
