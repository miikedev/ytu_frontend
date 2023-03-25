import React, { useEffect, useState } from 'react'
import { PageTitle } from '../components/PageTitle'
import { getData } from '../data/Axios'
import { EducationalSupportContent } from '../components/EducationalSupportContent'
import { EDUCATION_SUPPORT } from '../data/EducationSupportData'
export const EducationSupport = () => {

  return (
    <div>
        <PageTitle pageTitle="Educational Support For Children"/>
        <p className='col-9 mx-auto text-center mt-4'>
        Supporting our people forces is our priority in this revolution. We support our defense forces and resistance groups mainly by fundraising. We established a program called "Fundraising by YTUSU" in December 2021. Since then we have been organizing many campaigns and distributed several donations. 
        </p>
        {EDUCATION_SUPPORT.map(item => 
          <EducationalSupportContent key={item.id} 
            imgOne={item.image_one}
            imgTwo={item.image_two}
            title={item.title}
            date={item.date}
            description={item.text}
          />  
        )}
    </div>
  )
}
