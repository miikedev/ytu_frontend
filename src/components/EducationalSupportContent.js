import React from 'react'

export const EducationalSupportContent = (props) => {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-start flex-wrap gap-3'>
            <div className='col-lg-3 col-md-5 col-12'>
                <img className='col-12' src={props.imgOne}/>
            </div>
            <div className='col-lg-6 col-md-7 col-12'>
                <h5>{props.heading} <span className='text-primary fst-italic'>{props.date}</span></h5>
                <p className='text-justify mt-3'>{props.description}</p>
                <a href='#' className='text-decoration-none'>See Details</a>
            </div>
        </div>
        <hr className='col-9 mx-auto'/>
    </div>
  )
}
