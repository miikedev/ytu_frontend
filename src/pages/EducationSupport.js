import React, { useEffect, useState } from 'react'
import { PageTitle } from '../components/PageTitle'
import { getData } from '../data/Axios'
import { EducationalSupportContent } from '../components/EducationalSupportContent'
export const EducationSupport = () => {
  const api = "http://localhost:3006/educational-support";
  const [state, setState] = useState([]);
  useEffect(() => {
    getData(api).then(res => {
        setState(res.data)
    })
  }, [])
  return (
    <div>
        <PageTitle pageTitle="Educational Support For Children"/>
        <p className='col-9 mx-auto text-center mt-4'>
        Supporting our people forces is our priority in this revolution. We support our defense forces and resistance groups mainly by fundraising. We established a program called "Fundraising by YTUSU" in December 2021. Since then we have been organizing many campaigns and distributed several donations. 
        </p>
        <div>
            {state.map(item => 
                <div key={item.id}>
                    <EducationalSupportContent
                    id={item.id} date={item.date} imgOne={item.imgOne} imgTwo={item.imgTwo}
                    heading={item.heading} description={item.description}
                    />
                </div>
            )}
        </div>
    </div>
  )
}
