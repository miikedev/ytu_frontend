import React from 'react'

export const Article = (props) => {
  return (
    <div className='d-flex flex-wrap justify-content-between align-items-end align-items-md-center col-lg-11 mx-auto'>
      <div className='col-lg-5 col-md-6 col-sm-12'>{props.textContent}</div>
      <div className='col-lg-7 col-md-6 col-sm-12'>{props.imgContent}</div>
    </div>
  )
}
