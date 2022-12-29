import React from 'react'
import SU_Logo from './photos/SU logo.svg'
import Ytu from './photos/YTU.svg'
import './css/Union.css'
export const Union = () => {
  return (
    <div className='col-12 bg-color'>
        <div className='d-flex justify-content-between align-items-center flex-lg-row flex-md-row flex-column flex-column-reverse'>
            <div className='union-content col-lg-7 col-sm-12 col-md-8 p-1'>
                <h3 style={{color: "#103F54", fontWeight: "600"}}>The Union</h3>
                <p className='text mt-3'>YTU Students' Union is the main student body of the university, re-established in 2014 with the aim of bridging between the university administration and the students, and revitalization of a vivid campus life and extra-curricular activities. Since its establishment, YTU Students’ Union has raised a sequence of festive and lively events, fierce competitions for further development of soft skills as well as volunteering opportunities for students. </p>
            </div>
            <div className='col-lg-2 col-md-3'>
                <img className='col-12' src={SU_Logo}/>
            </div>
        </div>
    </div>
  )
}
