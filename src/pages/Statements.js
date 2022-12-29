import React from 'react'
import '../components/Card.css'
import { statements } from '../data/Data'
import Badge from '../components/small-img/badge.svg'
import './css/Statements.css'
import '../components/Card.css'
import { PageTitle } from '../components/PageTitle'
export const Statements = () => {
  return (
    <div>
        <PageTitle pageTitle="Statements"/>
        <div className='mx-auto col-12 d-flex justify-content-center flex-wrap gap-3 mt-4'>
            {statements.map(statement => 
                <div key={statement.id} className='col-lg-5 col-sm-10 col-md-9 statement d-flex justify-content-between gap-3 align-items-center'>
                    <div className='p-1'>
                        <div className='position-relative'>
                            <img src={statement.img} />
                            <img className='position-absolute top-0 end-0' src={Badge} />
                        </div>
                    </div>
                    <div className='pe-2'>
                        <h5 className='text stm-text'>Statements</h5>
                        <p className='fw-semibold mt-3'>{statement.title}</p>
                        <p className='text-primary mt-4'>{statement.date}</p>
                    </div>
                </div>    
            )}
        </div>
    </div>
  )
}
