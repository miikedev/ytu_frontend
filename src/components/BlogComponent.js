import React from 'react'
import { idps } from '../data/IDP_Data'
import { Card } from 'react-bootstrap'
export const BlogComponent = ({links}) => {
  return (
    <div>
        {/* Upper Top Two Sections */}
        <div className='d-flex flex-wrap gap-4 justify-content-center'>
          {links.filter(link => link.id === 0).map(link =>
            <Card key={link.id} className="col-lg-3 col-md-4 col-12">
            <Card.Body>
              <div className='col-lg-11 mx-auto'>
                <img className='col-12 rounded' src={link.photo}/>
              </div>
              <Card.Title className='mt-3'>{link.title}</Card.Title>
              <Card.Text>{link.description}</Card.Text>
              <Card.Link href="#" style={{textDecoration: "none"}}>See details</Card.Link>
            </Card.Body>
          </Card>  
          )}
          <div className='col-lg-6 col-md-7 col-12'>
            {links.filter(link => link.id > 0 && link.id < 4).map(link => 
              <div className='d-flex flex-lg-row flex-md-row flex-column mb-2 gap-2' key={link.id}>
                <div className='col-lg-4 col-md-3 col-12'>
                  <img className='col-12' src={link.photo}/>
                </div>
                <div>
                  <h5>{link.title}</h5>
                  <p>{link.description}</p>
                  <a href="#" style={{textDecoration: "none"}}>See details</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lower Section */}
        <div className='col-12 mt-3 d-flex gap-3 flex-wrap justify-content-center'>
          {links.filter(link => link.id > 3).map(link => 
            <div className='col-lg-3 col-md-4 col-12' key={link.id}>
              <div className='col-12'>
                <img className='col-12' src={link.photo}/>
              </div>
              <h5 className='mt-3'>{link.title}</h5>
              <p>{link.description}</p>
              <a href='#' style={{textDecoration: "none"}}>See details</a>
            </div>
          )}
        </div>
    </div>
  )
}
