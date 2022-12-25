import React from 'react'

export const CampusPlanImage2 = (props) => {
  return (
    <div className='d-flex gap-lg-3 gap-1'>
        <div style={{backgroundImage: `url(${props.secondImg})`, height:"auto", backgroundSize: "cover", backgroundPosition: "center", transform: "scaleY(1.13)", transformOrigin: "bottom"}} className="col-6 d-flex justify-content-center align-items-center px-3 py-4">
            <div className='glass p-3 col-10'>
                <h6 className='text-center text-light fs-3'>{props.secondplaceName}</h6>
            </div>
        </div>
        <div style={{backgroundImage: `url(${props.thirdImg})`, height:"auto",  backgroundSize: "cover", backgroundPosition: "center"}} className="col-6 d-flex justify-content-center py-4">
            <div className='glass p-3 col-10 d-flex align-items-center justify-content-center'>
                <h6 className='text-center text-light fs-3'>{props.thirdplaceName}</h6>
            </div>
        </div>
    </div>
  )
}
