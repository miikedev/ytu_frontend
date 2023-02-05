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
export const SpringLibraryBlog = () => {
  const api = "http://localhost:3006/spring-library"
  let {id} = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    getDataID(api, id).then(res => {
        setState(res.data)
    })
  }, [])
  return (
    <div className='col-lg-11 mx-auto'>
         <SpringNavBar 
            path='/spring-library'
            parentNav="Spring Libraries in Karenni"
            currentNav={state.title}
         />
         <ReadBlogHeader imgSrc={SpringLibraryImg} title={state.title} description={state.description}/>
         <div className='mt-5 d-flex flex-wrap justify-content-between'>
            <div className='col-lg-4 col-md-4 col-12 pe-lg-4 ps-md-2 pe-md-3 pe-0 text-justify'>
                <p>{state.section1_first}</p>
                <p>{state.section1_second}</p>
                <img className='col-12' src={SampleOne}/>
                <p className='fw-semibold fst-italic'>{state.section1_caption}</p>
            </div>
            <div className='col-lg-4 col-md-4 col-12 pe-lg-4 pe-md-3 pe-0 text-justify'>
                <img className='col-12' src={SampleTwo}/>
                <p className='fw-semibold fst-italic'>{state.section2_caption}</p>
                <p>{state.section2_text}</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 pe-lg-4 pe-md-3 pe-0 text-justify">
                <p>{state.section3_first}</p>
                <p>{state.section3_second}</p>
                <img className='col-12' src={SampleThree}/>
                <p className='fw-semibold fst-italic'>{state.section3_caption}</p>
            </div>
         </div>

         <div>
            <Card title="Activities in July"/>
            <p>{state.July_Activity}</p>
            <div className='d-flex flex-wrap justify-content-between'>
                <div className='col-lg-3 col-md-4 col-12 p-2'>
                    <img className='col-12' src={ActivityImg1}/>
                    <h4 className='heading'>9 July 2022</h4>
                    <p className='text-muted'>Group Reading</p>
                </div>
                <div className='col-lg-3 col-md-4 col-12 p-2'>
                    <img className='col-12' src={ActivityImg2}/>
                    <h4 className='heading'>16 July 2022</h4>
                    <p className='text-muted'>Organizing a reading group and discussion</p>
                </div>
                <div className='col-lg-3 col-md-4 col-12 p-2'>
                    <img className='col-12' src={ActivityImg3}/>
                    <h4 className='heading'>23 July 2022</h4>
                    <p className='text-muted'>A small essay competition and painting</p>
                </div>
                <div className='col-lg-3 col-md-4 col-12 p-2'>
                    <img className='col-12' src={ActivityImg4}/>
                    <h4 className='heading'>23 July 2022</h4>
                    <p className='text-muted'>Story telling and Group Reading</p>
                </div>
                
            </div>
         </div>

         <div>
         <Card title="Activities in August"/>
         </div>
    </div>
  )
}
