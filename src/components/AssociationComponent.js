import React, { useState } from 'react'

export const Component = (props) => {
    let associations=props.associations
    return(
      associations.map(association => 
            <div key={association?.id} className='d-flex flex-column flex-wrap justify-content-evenly align-items-center col-lg-3 col-sm-12 col-md-3'>
                <img src={association?.logo} alt="" height="200"/>
                <h5 className='col-9 text-center text text-color'>{association?.name}</h5>
            </div>
        ))
  }
  