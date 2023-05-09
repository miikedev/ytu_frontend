import React from 'react'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
export const DonateBtn = (props) => {
  return (
    <LinkContainer style={props.style} to="/form">
      <Button>
        Donate Now
      </Button>
    </LinkContainer>
  )
}
