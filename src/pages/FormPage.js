import React, { useState } from 'react'
import { MultiStepForm } from '../components/MultiStepForm'
import './css/FormPage.css'
import { Button, Card, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import PostCard from '../components/small-img/PostCard.svg'
import {BsFileEarmarkArrowUpFill} from 'react-icons/bs'
import { countriesAndPayment } from '../data/RadioButtonData'
import { BankAccountModal } from '../components/BankAccountModal'
const GeneralInforamtion = () => {
  const [modalShow, setModalShow] = useState(false)
  const [temdata, setTempData] = useState([]);
  
  const handleHide = () => {
    setModalShow(false)
  }
  const getData = (bankName, accountName, bsbNumber, accountNumber) => {
    let tempData = [bankName, accountName, bsbNumber, accountNumber];
    setTempData(item => [1,...tempData]);
    return setModalShow(true)
  }
  return(
    <div className='d-flex flex-wrap gap-4'>
      <Form.Group controlId="validationCustom01" className='col-lg-5 col-12 col-md-5'>
            <Form.Label>Donar Name <span className='text-danger fs-5'>*</span></Form.Label>
            <Form.Control required type="text" placeholder="Enter your name" />
            <Form.Text className="text-muted">
              The name will be written in the certificate
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter your username
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='col-lg-5 col-12 col-md-5'>
            <Form.Label>Email Address <span className='text-danger fs-5'>*</span></Form.Label>
            <Form.Control required type="email" placeholder="Enter your email address"/>
            <Form.Control.Feedback type="invalid">
              Please enter your email address
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='col-10'>
        <Form.Label>Select Payment Method or Country <span className='text-danger fs-5'>*</span></Form.Label>
          <div className='d-flex flex-wrap'>
              <div className='col-lg-2 col-12 col-md-3'>
                {countriesAndPayment.map(item => 
                  <div key={item.id}>
                    <input required onClick={() => getData(item.bankName, item.accountName, item.bsbNumber, item.accountNumber)} type="radio" id={item.option} name="country_and_payment" value={item.option} />
                    <label for={item.option}>{item.option}</label>
                    <BankAccountModal show={modalShow} onHide={() => handleHide()} bankName={temdata[1]} accountName={temdata[2]} bsbNumber={temdata[3]} accountNumber={temdata[4]}/>
                    <Form.Control.Feedback type='invalid'>
                        Please choose a payment method
                    </Form.Control.Feedback>
                  </div>  
                ).slice(0, 4)}
              </div>
              <div className='col-lg-2 col-12 col-md-3'>
                {countriesAndPayment.map(item => 
                  <div key={item.id}>
                    <input required type="radio" id={item.option} name="country_and_payment" value={item.option} />
                    <label for={item.option}>{item.option}</label>
                    <Form.Control.Feedback type='invalid'>
                      Please choose a payment method
                    </Form.Control.Feedback>
                  </div>  
                ).slice(4, 8)}
              </div>
              <div className='col-lg-3 col-12 col-md-5'>
                {countriesAndPayment.map(item => 
                  <div key={item.id}>
                    <input required type="radio" id={item.option} name="country_and_payment" value={item.option} />
                    <label for={item.option}>{item.option}</label>
                    <Form.Control.Feedback type='invalid'>
                      Please choose a payment method
                    </Form.Control.Feedback>
                  </div>  
                  
                ).slice(8, 12)}
              </div>
              <div className='col-lg-2 col-12 col-md-3'>
                {countriesAndPayment.map(item => 
                  <div key={item.id}>
                    <input required type="radio" id={item.option} name="country_and_payment" value={item.option} />
                    <label for={item.option}>{item.option}</label>
                    <Form.Control.Feedback type='invalid'>
                        Please choose a payment method
                    </Form.Control.Feedback>
                  </div>  
                ).slice(12, 16)}
              </div>

          </div>
          
      </Form.Group>
    </div>
  )
}
const TransactionDetail = () => {
  return(
    <div className='d-flex flex-wrap gap-4'>
        <FormGroup className='col-lg-5 col-md-5 col-12'>
          <Form.Label>Donated Amount <span className='text-danger fs-5'>*</span></Form.Label>
          <InputGroup>
            <Form.Control 
              placeholder='Enter donated amount'
              aria-label='Enter donated amount'
              aria-describedby='basic-addon'
              required
            />
            <InputGroup.Text id="basic-addon">$</InputGroup.Text>
            <Form.Control.Feedback>Please enter your donated amount</Form.Control.Feedback>
          </InputGroup>
          <Form.Text className="text-muted">Amount that you have transferred to us</Form.Text>
        </FormGroup>
        <FormGroup className='col-lg-5 col-md-5 col-12'>
          <Form.Label>Last 4 of transaction number</Form.Label>
          <Form.Control placeholder='Enter your last 4 numbers of your transaction'/>
        </FormGroup>
        <FormGroup className='col-lg-5 col-md-5 col-12'>
          <Form.Label>Upload Payment receipt/screenshot <span className='text-danger fs-5'>*</span></Form.Label>
          <div className='file-input-wrapper'>
            <input required type="file" id="file_input" hidden/>
            <label for="file_input" className='file-input'><BsFileEarmarkArrowUpFill className='text-primary fs-4'/></label>
            <p className="text-secondary">Drag and drop files, or <span className='text-primary'>Browser</span></p>
            <Form.Control.Feedback type='invalid'>
              This field is required
            </Form.Control.Feedback>
          </div>
        </FormGroup>
        <FormGroup className="col-lg-5 col-md-5 col-12">
          <Form.Label>Note</Form.Label>
          <Form.Control as="textarea" rows={4}/>
        </FormGroup>
    </div>
  )
}
const PaymentSuccessful = () => {
  return(
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src={PostCard}/>
      <h3 className='text-center'>Thank you for your support</h3>
      <p className='text-center mt-3 col-lg-6 col-12'>Please wait for admin to check your payment. We will send you the Certificate of your Donation via the E-mail once we have read and approved your submission. </p>
    </div>
  )
}

const ProcessBtn = (props) => {
  return(
    <div>
      <Button variant="light" className='me-1' onClick={props.prevBtn}>Back</Button>
      <Button variant="outline-primary" onClick={props.checkValidate}>Next</Button>
    </div>
  )
}
const SuccessBtn = () => {
  return(
    <Button type='submit' variant="success">Done</Button>
  )
}
export const FormPage = () => {
  const [index, setIndex] = useState(1);
  const [validated, setValidated] = useState(false);
  const checkValidate = (event) => {
    const form = event.currentTarget;
    if(form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else {
      setValidated(true);
    }
    if(validated === true) {
      setIndex(prevIndex => prevIndex + 1)
    }
  }
  const conditionalComponent = () => {
    switch(index) {
      case 1: 
        return <GeneralInforamtion />;
      case 2:
        return <TransactionDetail />;
      case 3:
        return <PaymentSuccessful />
    }
  }
  const prevOne = () => {
    if(index > 1) {
      setIndex(prevIndex => prevIndex - 1)
    }
  }
  
  return (
    <div className="col-10 mx-auto">
        <div className='formBanner'>
            <div className='innerBanner py-4 px-5'>
                <h3 style={{color: '#103F54', fontWeight: 600}}>SUPPORT OUR REVOLUTION</h3>
                <p className='mt-3'>We need more funds and donations to keep supporting the revolution of Myanmar. <br/>Please fill in the following form and you can donate us.</p>
            </div>
        </div>
        <div className='mt-3 mb-3'>
        <MultiStepForm step={index}/>
        </div>
        <Card className='mb-2'>
          <Card.Body className='px-4 py-3'>
            <Form noValidate validated={validated}>
              {conditionalComponent()}
              <div className='float-end mt-2'>
                {index=== 3 ? <SuccessBtn /> : <ProcessBtn prevBtn={prevOne} checkValidate={checkValidate}/>}
              </div>
            </Form>
          </Card.Body>
        </Card>

    </div>
  )
}
