import React, { useEffect, useState } from 'react'
export const Model = (props) => {
  
  let modelStyle = {
    display: 'block',
    /* From https://css.glass */
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.3)"
  }
  return (
    <div className="modal show fade col-12" style={modelStyle}>
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5">Statement</h1>
                    <button type="button" className="btn-close" onClick={props.hide}></button>
                </div>
                <div className="modal-body">
                    <img className='img-fluid col-12' src={props.img}/>
                </div>
            </div>
        </div>
    </div>
  )
}
