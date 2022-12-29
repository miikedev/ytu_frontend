import React from 'react'
import './Card.css'
import { PageTitle } from './PageTitle'
export const Associations = (props) => {
  return (
    <div>
        <PageTitle pageTitle={props.associationName}/>
        
        <div className='mx-auto col-lg-10 col-sm-12 col-md-12 d-flex justify-content-center flex-wrap gap-lg-3 gap-md-5 gap-sm-2 mt-4'>
            {props.component}
        </div>
    </div>
  )
}
