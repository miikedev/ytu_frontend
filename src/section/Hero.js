import React from 'react'
import './css/Hero.css'
import MaskImg from '../components/small-img/Mask group.svg'
import { DonateBtn } from '../components/DonateBtn'

export const Hero = (props) => {
  const data=props?.data
  return (
    <div className='hero px-2 py-3'>
        <div className='hero-content col-lg-8 col-10 p-3'>
            <div className='d-flex justify-contents-center align-items-center flex-column'>
                <img className='img-fluid' src={MaskImg}/>
                <h3 className="content-title">{data?.main_header}</h3>
                <p className='fw-semibold'>{data?.sub_header}</p>
            </div>
            <div className='content-text'>
                <p>
                    {data?.description}
                </p>
                
            </div>
            <div style={{position: 'absolute', right: "-2rem", bottom: "-0.5rem"}}>
            <DonateBtn style={{
                backgroundColor: "#103F54",
                border: "none",
                borderRadius: "36px",
                textTransform:"uppercase",
                fontSize: "1em",
                padding: "0.5rem 1rem"
            }}/>
        </div>
        </div>
        
    </div>
  )
}
