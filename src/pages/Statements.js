import React, { useState } from 'react'
import '../components/Card.css'
import { statements } from '../data/Data'
import Badge from '../components/small-img/badge.svg'
import './css/Statements.css'
import '../components/Card.css'
import { Model } from '../components/Model'
import { PageTitle } from '../components/PageTitle'
export const Statements = () => {
  const [scrollableModal, setScrollableModal] = useState(false)
  const [model, setModel] = useState(false)
  const [tempdata, setTempData] = useState([])
  const getData = (img) => {
    let tempData = [img]
    setTempData(item => [1,...tempData]);
    return setModel(true)
  }
  return (
    <div>
        <PageTitle pageTitle="Statements"/>
        <div className='d-flex flex-wrap justify-content-center align-items-center mt-3 gap-2'>
            {statements.map(statement => 
                <>
                    <div key={statement.id} onClick={() => getData(statement.img)} className='d-flex flex-wrap statement col-lg-5 col-md-4 col-sm-12'>
                        <div className='col-lg-4 col-12 pt-1'>
                            <div className='position-relative'>
                                <img className='col-12' src={statement.img}/>
                                <img className='position-absolute top-0 end-0' src={Badge} />
                            </div>
                        </div>
                        <div className='align-self-center pe-2 col-lg-7'>
                            <h5 className='stm-text'>Statements</h5>
                            <p className='fw-semibold'>{statement.title}</p>
                            <p className='text-primary'>{statement.date}</p>
                        </div>
                    </div>
                    {
                        model === true? <Model img={tempdata[1]} hide={() => setModel(false)}/> : ''
                    }
                    {/* <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
                        <MDBModalDialog scrollable>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>Statement</MDBModalTitle>
                                    <MDBBtn
                                        className='btn-close'
                                        color='none'
                                        onClick={() => setScrollableModal(!scrollableModal)}
                                    ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                    <img className='col-12 img-fluid' src={statement.img}/>
                                </MDBModalBody>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal> */}
                </>
            )}
        </div>
    </div>
  )
}
