import React from 'react'

export const CharterCard = (props) => {
  const style = {
    background: '#FFFFFF',
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 20px rgba(16, 63, 84, 0.1)",
    borderRadius: "10px"
  }
  return (
    <div style={style} className='col-lg-4 col-md-4 col-sm-12 py-3 d-flex flex-column justify-content-center align-items-center'>
       <div className='text-center'> <img src={props.ImgSrc}/></div>
       <p className='col-9 text-center'>{props.cardText}</p>
    </div>
  )
}
