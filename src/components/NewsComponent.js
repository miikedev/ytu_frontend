import React from 'react'
import './NewsComponent.css'
import './Card.css'
export const NewsComponent = (props) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-12 bg-light mb-2'>
        <div className='main'>
            <div className='d-flex'>
                <img className='col-6' src={props.ImgSrc}/>
                <img className='col-6' src={props.RightImgSrc} />
            </div>
            <div className='date text'>
                <p>{props.date}</p>
            </div>
        </div>
        <div className='p-2 mt-4'>
            <h5 className='text' style={{color: "#103F54", fontWeight: "600"}}>{props.category}</h5>
            <div className='d-flex flex-column gap-1 mt-3'>
                <a className='link-text title' href='#'>
                    {props.title}
                </a>
                <a className='link-text' href='#'>See Details</a>
            </div>
        </div>
    </div>
  )
}
