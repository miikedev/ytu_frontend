import React from 'react'
import { AboutSectionPhoto } from '../components/AboutSectionPhoto'
import { AboutSectionTextCard } from '../components/AboutSectionTextCard'
import FresherWelcome from '../section/photos/FresherWelcome.png'
import FootballMatch from '../section/photos/FootballMatch.png'
import ThagyanFestival from '../section/photos/ThagyanFestival.png'
export const CampusContainer = () => {
  return (
    <div className='d-flex align-items-center mt-5 flex-wrap'>
        <AboutSectionTextCard title="Student Rights" text="Organize competitions  and hosts events like Fresher Welcome and SU day"/>
        <AboutSectionPhoto imgSrc={FresherWelcome} placeName="Fresher Welcome"/>
        <AboutSectionTextCard title="Constitution" text="Main backone of the student’s Union. Elections are held once a year."/>
        <AboutSectionPhoto imgSrc={FootballMatch} placeName="Football Match"/>
        <AboutSectionTextCard title="Campus Life" text="Organize competitions  and hosts events like Fresher Welcome and SU day"/>
        <AboutSectionPhoto imgSrc={ThagyanFestival} placeName="Prewater Festival"/>
    </div>
  )
}
