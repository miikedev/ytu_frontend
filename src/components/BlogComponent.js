import React, { useEffect, useState } from 'react'
import { getData } from '../data/Axios';
import { LinkContainer } from 'react-router-bootstrap';
export const BlogComponent = (props) => {
  const [state, setState] = useState({
    blogs: []
  });
  useEffect(() => {
    getData(props.api).then(res => {
        console.log(res.data);
        setState({blogs: res.data})
    })
  }, [])
  return (
    <div className='col-lg-11 col-12 px-2 mx-auto'>
        {/* Upper Section */}
        <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='col-lg-4 col-md-5 p-3' style={{border: "1px solid #103F54", borderRadius: "15px"}}>
                {state.blogs.map(blog => 
                  <LinkContainer style={{cursor: "pointer"}} to={`/read-blog/${blog.id}`}>
                  <div key={blog.id}>
                    <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: "#FECECC", borderRadius: "12px"}}>
                      <img className='col-12' src={blog.photo} />
                    </div>
                    <h5 className='mt-4'>{blog.title}</h5>
                    <p>{blog.description.slice(0,75)}...</p>
                    <a href="#" style={{textDecoration: "none"}}>See details</a>
                  </div>
                  </LinkContainer>
                ).slice(0, 1)}
              </div>
              <div className='col-lg-7 col-md-6 col-12 d-flex flex-column mt-3 mt-lg-0'>
                {state.blogs.map(blog => 
                  <LinkContainer style={{cursor: "pointer"}} to={`/read-blog/${blog.id}`}>
                    <div className='d-flex gap-3 p-lg-1'>
                    <div className='col-lg-3 col-4'>
                      <img className='col-12' src={blog.photo}/>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <div>
                        <h5>{blog.title}</h5>
                        <p className='text-primary'>See details</p>
                      </div>
                    </div>
                    </div>
                  </LinkContainer>
                ).slice(1, 4)}
              </div>
        </div>
        {/* Lower Section */}
        <div className='d-flex flex-wrap mt-5'>
                {state.blogs.map(blog =>
                  <div key={blog.id} className='col-lg-3 col-md-4 col-12'>
                    <img src={blog.photo}/>
                    <h5>{blog.header}</h5>
                    <p>{blog.description}</p>
                    <a href='#'>See details</a>
                  </div>
                ).slice(4, 10)}
          </div>
    </div>
  )
}

