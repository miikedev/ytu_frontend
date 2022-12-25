import React from 'react'
import './css/Hero.css'
import MaskImg from '../components/small-img/Mask group.svg'
import { DonateBtn } from '../components/DonateBtn'

export const Hero = () => {
  return (
    <div className='hero px-2 py-3'>
        <div className='hero-content col-lg-8 col-10 p-3'>
            <div className='d-flex justify-contents-center align-items-center flex-column'>
                <img src={MaskImg}/>
                <h3 className="content-title">THE UNIVERSITY</h3>
                <p className='fw-semibold'>BIT-RIT-YIT-YTU</p>
            </div>
            <div className='content-text'>
                <p>
                    For four generations from BIT of colonial age to YTU of democracy age, YTU has been the premiere university of engineering in Myanmar. Located in Insein, the university boasts a large campus. After years of closing undergraduate programs as a result of the 8888 uprisings, YTU finally reopened in 2012. Since then, YTU offers 14 undergraduate engineering and architecture programs, a range of post graduate and doctorate programs.
                </p>
                <p>
                    Due to the Spring Revolution, the physical campus is temporarily closed and the education services can be acquired only from online via University Council Official Website. The teachers and students are also joining in CDM and also participating in various sectors of revolution.
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
