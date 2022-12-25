import React from 'react'
import { Associations } from '../components/Associations'
import { clubs } from '../data/Club'
import { BsCalendarWeek } from 'react-icons/bs'
export const OtherClubs = () => {
  const Component = () => {
    return(
       clubs.filter(club => club.id > 21)
            .map(club => 
                <div key={club.id} className='d-flex flex-column flex-wrap justify-content-evenly align-items-center col-lg-3 col-sm-12 col-md-3'>
                    <img src={club.logo}/>
                    <h5 className='text-center text text-color title-underline'>{club.club_name}</h5>
                    <p className='text'><BsCalendarWeek/><span className='ms-2' style={{color: "#2F2E2E"}}>Established Year - {club.established_year}</span></p>
                </div>
            )
    )
  }
  
  return (
    <div>
        <Associations 
            associationName="Others Clubs"
            component={<Component />}
        />
    </div>
  )
}
