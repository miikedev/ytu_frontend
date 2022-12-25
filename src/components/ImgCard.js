import React from 'react'
import './ImgCard.css'
export const ImgCard = (props) => {
  return (
    <div className='col-lg-4 col-12 col-md-4 card-container p-3'>
        <img className='col-12' src={props.cardImg} />
        <p className='col-12 mt-2'>{props.cardText}</p>
    </div>
  )
}
