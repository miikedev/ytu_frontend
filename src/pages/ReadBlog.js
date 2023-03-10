import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataID } from '../data/Axios'
import SampleImg from './photos/SampleImg.png'
import './css/ReadBlog.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { ReadBlogHeader } from './ReadBlogHeader'
import { SpringNavBar } from '../components/SpringNavBar'
export const ReadBlog = () => {
  const {id} = useParams();
  const [state, setState] = useState([]);
  const api = "http://localhost:3006/idp"
  useEffect(() => {
    getDataID(api, id).then(res => {
        
        setState(res.data)
    })
  }, [])
  console.log(id)
  return (
    <div className='col-lg-10 mx-auto'>
        {/* Topmost Section */}
         
        <SpringNavBar 
            path="/idps"
            parentNav="IDPs Support and Public Support"
            currentNav={state.title}
        />   
            
        <ReadBlogHeader imgSrc={SampleImg} title={state.title} description={state.description}/>

        {/* Section 1 */}
        <div>
            <div className='d-flex justify-content-between mt-5'>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-center fw-semibold'>Fig. {state.caption_1}</p>
                <p>{state.text1}</p>
            </div>
        </div>

        {/* Section 2 */}
        <div>
            <div className='d-flex justify-content-between mt-5'>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-center fw-semibold'>Fig. {state.caption_2}</p>
                <p>{state.text2}</p>
            </div>
        </div>

        {/* Section 3 */}
        <div>
            <div className='d-flex justify-content-between mt-5'>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
                <div className='col-3'>
                    <img className='col-12' src={SampleImg} />
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-center fw-semibold'>Fig. {state.caption_3}</p> 
                <p>{state.text3}</p>
            </div>
        </div>
    </div>
  )
}
