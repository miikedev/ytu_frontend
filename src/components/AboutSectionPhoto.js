import React from 'react'
import './AboutSectionPhoto.css'
export const AboutSectionPhoto = (props) => {
  return (
    <div className='col-lg-4 col-md-6 col-12'>
        <div style={{backgroundImage: `url(${props.imgSrc})`, height:"auto", backgroundSize: "cover"}} className="col-12 d-flex justify-content-center align-items-center px-3 py-5">
            <div className='glass p-5 col-10'>
                <h4 className='text-center text-light fs-1'>{props.placeName}</h4>
            </div>
        </div>
    </div>
  )
}
