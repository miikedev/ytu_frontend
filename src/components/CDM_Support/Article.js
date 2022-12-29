import React from 'react'

export const Article = (props) => {
  return (
    <div>
      <div className='col-5'>{props.textContent}</div>
      <div>{props.imgContent}</div>
    </div>
  )
}
