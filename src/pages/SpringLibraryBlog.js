import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataID } from '../data/Axios'
import SpringLibraryImg from './photos/SpringLibrary.png'
import SampleOne from './photos/SampleOne.png'
import SampleTwo from './photos/SampleTwo.png'
import SampleThree from './photos/SampleThree.png'
import ActivityImg1 from './photos/ActivityImg1.png'
import ActivityImg2 from './photos/ActivityImg2.png'
import ActivityImg3 from './photos/ActivityImg3.png'
import ActivityImg4 from './photos/ActivityImg4.png'
import { Card } from '../components/Card'
import { ReadBlogHeader } from './ReadBlogHeader'
import './css/SpringLibraryBlog.css'
import { SpringNavBar } from '../components/SpringNavBar'
import { SPRING_LIBRARIES } from '../data/SpringLibraryData'
import { PageTitle } from '../components/PageTitle'
export const SpringLibraryBlog = () => {
  let {id} = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
        setState(SPRING_LIBRARIES[id])
  }, [])
  console.log(state)
  return (
    <div className='container'>
         <SpringNavBar 
            path='/spring-library'
            parentNav="Spring Libraries in Karenni"
            currentNav={state.title}
         />
         {/* Header Section */}
         <div className='d-flex flex-column flex-md-row col-12 gap-5'>
            <div className='col-12 col-md-6'>
               <img className='col-12' src={state.library_photo}/>
            </div>
            <div className='box d-flex flex-column justify-content-center col-12 col-md-6'>
                <h3>{state.library_name}</h3>
                <p className='mt-3'>{state.library_name} was {state.library_description}</p>
            </div>
         </div>

         <div className='d-flex flex-column flex-md-row gap-2 gap-md-3 mt-5'>
            <div className='col-12 col-md-4 pe-2'>
               <p className='text-alignment'>{state?.library_text?.text_one}</p>
               <p className='text-alignment'>{state?.library_text?.text_two}</p>
               <img className='col-12' src={state?.library_sub_photo_one}/>
            </div>
            <div className='col-12 col-md-4 pe-2'>
               <img className='col-12' src={state?.library_sub_photo_two} />
               <p className='text-alignment mt-3'>{state?.library_text?.text_three}</p>
            </div>
            <div className='col-12 col-md-4 pe-2'>
               <p className='text-alignment'>{state?.library_text?.text_four}</p>
               <p className='text-alignment'>{state?.library_text?.text_five}</p>
               <img className='col-12' src={state?.library_sub_photo_three}/>
            </div>
         </div>

         <section>
           <div className='d-flex flex-column flex-md-row align-items-center gap-2'>
               <h3 className='title-color'>Activities in July</h3>
               <div className='line col-9'></div>
            </div> 
           <p className='mt-3'>{state?.activities?.july?.text}</p>
           <div className='d-flex flex-column flex-md-row'>
            {state?.activities?.july?.monthly_activities?.map(activity =>
               <div key={activity.id}>
                  <div className='col-12 col-md-11'>
                     <img className='col-12' src={activity.photo}/>
                  </div>
                  <p className='fw-bold fs-5'>{activity.date}</p>
                  <p className='text-secondary-emphasis'>{activity.description}</p>
               </div>
            
            )}
           </div>
         </section>
         <section className='mt-4'>
           <div className='d-flex flex-column flex-md-row align-items-center gap-2'>
            <h3 className='title-color'>Activities in August</h3>
            <div className='line col-9'></div>
           </div>
           <p className='mt-3'>{state?.activities?.august?.text}</p>
           <div className='d-flex flex-column flex-md-row'>
            {state?.activities?.august?.monthly_activities?.map(activity =>
               <div key={activity.id}>
                  <div className='col-12 col-md-11'>
                     <img className='col-12' src={activity.photo}/>
                  </div>
                  <p className='fw-bold fs-5'>{activity.date}</p>
                  <p className='text-secondary-emphasis'>{activity.description}</p>
               </div>
            
            )}
           </div>
         </section>
    </div>
  )
}
