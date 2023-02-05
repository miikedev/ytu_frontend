import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { PageTitle } from '../components/PageTitle'
import { SpringNavBar } from '../components/SpringNavBar'
import { getData } from '../data/Axios'
import './css/SpringLibrary.css'
export const SpringLibrary = () => {
  const [state, setState] = useState([]);
  const api = "http://localhost:3006/spring-library"
  useEffect(() => {
    getData(api).then(res => {
      console.log(res.data);
      setState(res.data)
    })
  }, [])
  return (
    <div>
        <PageTitle pageTitle="Spring Libraries in Karenni"/>
        <p className='col-9 mx-auto text-center mt-4'>Spring Libraries are established by YTUSU in Karenni Region (Kayah State). Up to today, there are 3 libraries located in the rural areas of this region. One place does not even have access to a phone network line and another one does not have access to internet connection. Only one has access to both networks but very unstable. These libraries are called Spring Library as these were established during the Spring Revolution of Burma. You can check the activities of these libraries also on Facebook.</p>

        <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 card-section py-5'>
          {state.map(item => 
            <LinkContainer style={{cursor: "pointer"}} to={`/read-spring-library-blog/${item.id}`}>
              <div key={item.id} className='col-lg-3 col-md-3 col-sm-12 card-bg px-3 py-4'>
                <div>
                  <img className='col-12' src={item.photo} />
                </div>
                <div className='mt-3'>
                  <h6>{item.title}</h6>
                  <p>{item.description.slice(0,65)}...</p>
                </div>
              </div>
            </LinkContainer>
          )}
        </div>
    </div>
  )
}
