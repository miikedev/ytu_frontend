import React from 'react'
import './AboutSectionPhoto.css'
export const CampusMasterPlanPhoto = (props) => {
  return (
    <div className='d-flex flex-lg-row flex-md-row flex-column gap-lg-1 mt-sm-5 gap-md-2'>
        <div style={{backgroundImage: `url(${props.firstImg})`, height:"auto",backgroundSize: "cover", backgroundPosition: "center"}} className="col-lg-4 col-sm-2 col-md-4 d-flex justify-content-center py-5 py-lg-4">
            <div className='glass p-lg-3 p-5 col-lg-10 col-8 d-flex align-items-center justify-content-center'>
                <h6 className='text-center text-light fs-3'>{props.firstplaceName}</h6>
            </div>
        </div>
        <div style={{backgroundImage: `url(${props.secondImg})`, height:"auto",  backgroundSize: "cover", backgroundPosition: "center", transform: "scaleY(1.13)", transformOrigin: "bottom"}} className="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center align-items-center px-3 py-4">
            <div className='glass p-5 col-lg-10 col-8'>
                <h6 className='text-center text-light fs-3'>{props.secondplaceName}</h6>
            </div>
        </div>
        <div style={{backgroundImage: `url(${props.thirdImg})`, height:"auto",  backgroundSize: "cover", backgroundPosition: "center"}} className="col-lg-4 col-md-4 col-sm-2 d-flex justify-content-center py-4">
            <div className='glass p-lg-3 p-5 col-lg-10 col-8 d-flex align-items-center justify-content-center'>
                <h6 className='text-center text-light fs-3'>{props.thirdplaceName}</h6>
            </div>
        </div>
    </div>
  )
}
