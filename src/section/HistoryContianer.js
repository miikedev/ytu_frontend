import React from 'react'
import { AboutSectionPhoto } from '../components/AboutSectionPhoto'
import { AboutSectionTextCard } from '../components/AboutSectionTextCard'
import MainBuilding from '../section/photos/MainBuilding.png'
import ULuPawGate from '../section/photos/ULuPawGate.png'
import LectureRoom from '../section/photos/LectureRoom.png'
export const HistoryContianer = () => {
  return (
    <div className='d-flex align-items-center mt-5 flex-wrap col-12'>
        <AboutSectionPhoto imgSrc={MainBuilding} placeName="Main Building"/>
        <AboutSectionTextCard title="Our history" text="In 2014, Founded Yangon Technological University Students’ Network"/>
        <AboutSectionPhoto imgSrc={ULuPawGate} placeName="U Lu Paw Gate"/>
        <AboutSectionTextCard title="YTUSU" text="In 2015-2016, Renamed as Yangon Technological University Students’ Union"/>
        <AboutSectionPhoto imgSrc={LectureRoom} placeName="Lecture Rooms"/>
        <AboutSectionTextCard title="Our Vision" text="Union serves as the voice of the students and protecting the right of students"/>
    </div>
  )
}
