import React from 'react'
import './css/ReadBlog.css'
export const ReadBlogHeader = (props) => {
  return (
    <div className='d-flex flex-wrap justify-content-between'>
        <div className='col-lg-5 col-md-5 col-12'>
            <img className='col-12' src={props.imgSrc}/>
        </div>
        <div className='col-lg-5 col-md-6 col-12 mt-1 border-top-bottom d-flex flex-column justify-content-center align-items-start'>
            <h4 className='text-color fw-semibold'>{props.title}</h4>
            <p className='mt-lg-5 mt-3 text-justify'>{props.description}</p>
        </div>
    </div>
   
  )
}
