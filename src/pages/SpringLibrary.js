import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { PageTitle } from '../components/PageTitle'
import { SpringNavBar } from '../components/SpringNavBar'
import { getData } from '../data/Axios'
import './css/SpringLibrary.css'
import { SPRING_LIBRARIES } from '../data/SpringLibraryData'
import { Card } from 'react-bootstrap'
export const SpringLibrary = () => {
  
  return (
    <div>
        <PageTitle pageTitle="Spring Libraries in Karenni"/>
        <p className='col-9 mx-auto text-center mt-4'>Spring Libraries are established by YTUSU in Karenni Region (Kayah State). Up to today, there are 3 libraries located in the rural areas of this region. One place does not even have access to a phone network line and another one does not have access to internet connection. Only one has access to both networks but very unstable. These libraries are called Spring Library as these were established during the Spring Revolution of Burma. You can check the activities of these libraries also on Facebook.</p>

        <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 card-section py-3'>
         {SPRING_LIBRARIES.map(library => 
            <Card key={library.id} className="bg-body rounded col-lg-3 col-md-4 col-12">
              <Card.Body>
                <div className='col-lg-12 text-center'>
                  <img className='col-12' src={library.library_photo}/>
                </div>
                <Card.Title className='mt-2'>{library.library_name}</Card.Title>
                <Card.Text>{library.library_description}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
    </div>
  )
}
