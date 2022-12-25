import React from 'react'
import './ThreeColumnComponent.css'
export const ThreeColumnComponent = (props) => {
  return (
    <div className='mt-4'>
        <h3 className='text-center'>{props.title}</h3>
        <div className='d-flex flex-lg-row flex-column gap-2 justify-content-between mt-5'>
            <div className='col-lg-4 col-12 px-5 py-4 position-relative rectangle'>
                <h5 className='text-center mt-2'>{props.subtitleOne}</h5>
                <p className='text-center mt-3'>{props.subTextOne}</p>
                <div className='position-absolute top-0 start-50 translate-middle circle'>
                    <h2 className='text-center circle-text'>1</h2>
                </div>
            </div>
            <div className='col-lg-4 col-12 px-5 py-4 position-relative rectangle'>
                <h5 className='text-center mt-2'>{props.subtitleTwo}</h5>
                <p className='text-center mt-3'>{props.subTextTwo}</p>
                <div className='position-absolute top-0 start-50 translate-middle circle'>
                    <h2 className='text-center circle-text'>2</h2>
                </div>
            </div>
            <div className='col-lg-4 col-12 px-5 py-4 position-relative rectangle'>
                <h5 className='text-center mt-2'>{props.subtitleThree}</h5>
                <p className='text-center mt-3'>{props.subTextThree}</p>
                <div className='position-absolute top-0 start-50 translate-middle circle'>
                    <h2 className='text-center circle-text'>3</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
