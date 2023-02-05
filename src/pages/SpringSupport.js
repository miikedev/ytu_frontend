import React from 'react'
import { BlogComponent } from '../components/BlogComponent'
import { PageTitle } from '../components/PageTitle'

export const SpringSupport = () => {
  const api = "http://localhost:3006/comrades"
  return (
    <div>
        <PageTitle pageTitle="Supporting Revolutionary Comrades"/>
        <p className='col-9 mx-auto text-center mt-4'>Supporting our people forces is our priority in this revolution. We support our defense forces and resistance groups mainly by fundraising. We established a program called "Fundraising by YTUSU" in December 2021. Since then we have been organizing many campaigns and distributed several donations.</p>

        <BlogComponent api={api}/>
    </div>
  )
}
