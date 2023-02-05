import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from 'react-step-progress-bar'
import './MultiStepForm.css'
import {MdModeEdit} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa'
import { Alert } from 'react-bootstrap';
export const MultiStepForm = (props) => {
  return (
    <div>
        <div className='mx-5'>
            <div className='px-5'>
                <ProgressBar
        percent={((props.step - 1) * 100) / 2}
        filledBackground="#103F54"
        >
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div className='current-step'>
                        {props.step === 1 ? <MdModeEdit/> : <FaCheck />}
                    </div>
                )}
            </Step>  
            <Step transition="scale">
                {({ accomplished, index }) => (
                <div className={props.step === 1 ? "next-step" : "current-step"}>
                    {props.step ===1 ? "2" : "" || props.step <= 2 ? <MdModeEdit /> : <FaCheck />}
                </div>
                )}
            </Step>  
            <Step transition="scale">
                {({ accomplished, index }) => (
                <div className={props.step === 3 ? "current-step" : "next-step"}>
                    {props.step === 3 ? <FaCheck /> : "3"}
                </div>
                )}
            </Step>  
                </ProgressBar>
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <p>General Information</p>
                <p>Transaction Detail</p>
                <p>Payment Successful</p>
            </div>
            <Alert variant="danger">
            Note: Please read the lines and fill carefully in the form. We will send you Certificate of Donation via the E-mail once we have read and approved your submission.
            </Alert>
        </div>
    </div>
  )
}
