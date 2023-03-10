import React from 'react'
import { Modal, Button } from 'react-bootstrap'
export const BankAccountModal = (props) => {
  return (
    <Modal
        {...props}
        size="md"
        centered
    >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title className='text-center' style={{color: "#103F54", fontWeight: "600"}}>
                BANK ACCOUNT
        </Modal.Title>
        <Modal.Body>
            <p className='text-muted text-center'>Send any amount shown to the banking details below</p>
            <h4 className='text-center fs-5'>{props.bankName}</h4>
            <div className='bg-light d-flex justify-content-center align-items-center pt-2'>
                <p className='text-center'>Name: <span className='fw-semibold'>{props.accountName}</span></p>
            </div>
            <div>
                <p className='text-center'>BSB: <span className='fw-semibold'>{props.bsbNumber}</span></p>
            </div>
            <div className='bg-light d-flex justify-content-center align-items-center pt-2'>
                <p className='text-center'>Account: <span className='fw-semibold'>{props.accountNumber}</span></p>
            </div>
            <p className='text-center text-danger'>Once your transaction has been successfully completed, please take the screenshot of your payment receipt and upload it in next screen.</p>
            <div className="d-grid">
                <Button onClick={props.onHide} variant="success" size="lg">Done</Button>
            </div>
        </Modal.Body>
    </Modal>
  )
}
