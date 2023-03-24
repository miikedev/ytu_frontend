import { Button } from 'bootstrap'
import React from 'react'
import { PageTitle } from '../components/PageTitle'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { BlogComponent } from '../components/BlogComponent'
import { idps } from '../data/IDP_Data'
export const IDPSupport = () => {
  
  return (
    <div>
        <PageTitle pageTitle="IDPs Support and Public Support"/>
        <p className='col-lg-9 col-sm-10 mx-auto text-center mt-4'>The Union has been helping IDPs in many regions. Most of our activities are in Karenni State as we will base there for the revolution period.  We also help the IDPs in Sagaing, Chin, Kachin and Karen through reliable local organizations. We help IDPs mostly by fundraising and sometimes by individual donors.</p>

        <BlogComponent links={idps}/>
    </div>    
  )
}
