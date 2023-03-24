import React from 'react'
import SU_Logo from './photos/SU logo.svg'
import Ytu from './photos/YTU.svg'
import './css/Union.css'
export const Union = (props) => {
  const data=props?.data
  return (
    <div className='col-12 bg-color py-3'>
        <div className='d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column flex-column-reverse gap-3'>
            <div className='union-content col-lg-7 col-sm-12 col-md-8 p-1'>
                <h3 style={{color: "#103F54", fontWeight: "600"}}>{data?.title}</h3>
                <p className='text mt-3'>{data?.description} </p>
            </div>
            <div className='col-lg-2 col-md-3 col-8'>
                <img className='col-12' src={data?.photo} alt=''/>
            </div>
        </div>
    </div>
  )
}
