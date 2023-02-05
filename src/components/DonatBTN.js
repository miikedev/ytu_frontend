import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
export const DonatBTN = () => {
  const style = {
    backgroundColor: "#103F54",
    borderRadius: "36px",
    padding: "0.5rem 1rem",
    border: "none",
    color: "#fff",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  }
  return (
    <LinkContainer to='/form'>
      <div className='sticky-bottom float-end p-lg-4 p-3'>
        
        <button style={style}>
             DONATE NOW
        </button>
        
    </div>
    </LinkContainer>
  )
}
