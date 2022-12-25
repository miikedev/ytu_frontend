import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
export const EnvironmentalAnalysis = (props) => {
  const style = {
    background: "#FFFFFF",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 20px rgba(16, 63, 84, 0.1)",
    borderRadius: "10px",
    textDecoration: "none"
  }
  return (
    <a className='col-lg-8 col-12 d-flex gap-lg-3 gap-1 p-lg-3 p-1' style={style}>
        <img src={props.img}/>
        <div>
            <p className='fs-6 text-dark'>Environmental Analysis({props.language})</p>
            <a href='#' style={{textDecoration: "none"}} className='d-flex align-items-center gap-lg-2 gap-2'>
                <div>Read Full Document</div>
                <BsBoxArrowUpRight />
            </a>
        </div>
    </a>
  )
}
