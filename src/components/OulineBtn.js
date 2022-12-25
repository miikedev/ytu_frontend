import React from 'react'
const style = {
    backgroundColor: "transparent",
    border: "2px solid #103F54",
    color: "#103F54",
    borderRadius: "5px",
    padding: "0.5rem 1rem"
}
export const OulineBtn = (props) => {
  return (
    <button style={style}>
        {props.btnName}
    </button>
  )
}
