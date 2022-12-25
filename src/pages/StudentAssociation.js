import React from 'react'
import './css/Statements.css'
import '../components/Card.css'
import { studentsAssociations } from '../data/Data'
import { Associations } from '../components/Associations'
import '../components/Card.css'
export const StudentAssociation = () => {
  const Component = () => {
    return(
        studentsAssociations.map(association => 
            <div key={association.id} className='d-flex flex-column flex-wrap justify-content-evenly align-items-center col-lg-3 col-sm-12 col-md-3'>
                <img src={association.img}/>
                <h5 className='col-9 text-center text text-color title-underline'>{association.name}</h5>
            </div>
        )
    )}
  return (
    <div>
        <Associations 
            associationName="Students' Associations"
            component ={<Component />}
        />
    </div>
  )
}
