import React from 'react'

export const AboutSectionComponent = (props) => {
  return (
    <div className='col-lg-11 col-12 mx-auto mt-3' style={{textAlign: "justify", textJustify: "inter-word"}}>
        <h4 className='px-2 px-lg-0'>{props.header}</h4>
        <p className='px-2 px-lg-0'>{props.firstText}</p>
        <p className='px-2 px-lg-0'>{props.secondText}</p>
        <p className='px-2 px-lg-0'>{props.thirdText}</p>
    <div>{props.imgContainer}</div>
        
    </div>
  )
}
