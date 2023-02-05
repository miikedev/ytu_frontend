import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import './SpringNavBar.css'
import {IoIosArrowBack} from 'react-icons/io'
export const SpringNavBar = (props) => {
  return (
    <div className='d-flex flex-wrap cursor'>
       <p className='fs-7 text-color'>Spring Revolution<IoIosArrowBack /></p>
       <LinkContainer to={props.path}>
        <p className='fs-7 text-color'>{props.parentNav}<IoIosArrowBack /></p>
       </LinkContainer>
       <p className='current-link'>{props.currentNav}</p>
    </div>
  )
}
