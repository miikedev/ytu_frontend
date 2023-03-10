import React from 'react'
import './css/CampusMasterPlan.css'
import { AboutSectionPhoto } from '../components/AboutSectionPhoto'
import ULuPawGate from './photos/ULuPawGate.png'
import RITYITYTU from './photos/RITYITYTU.png'
import MainBuilding from './photos/MainBuilding.png'
import GreenForestArea from './photos/GreenForestArea.png'
import Buffer from './photos/Buffer.png'
import { CampusMasterPlanPhoto } from '../components/CampusMasterPlanPhoto'
import { CampusPlanImage2 } from '../components/CampusPlanImage2'
import { ThreeColumnComponent } from '../components/ThreeColumnComponent'
import DinningHall from './photos/DinningHall.png'
import SportsStadium from './photos/SportsStadium.png'
import Hostel from './photos/Hostel.png'
import { ImgCard } from '../components/ImgCard'
import { EnvironmentalAnalysis } from '../components/EnvironmentalAnalysis'
import Eng from '../components/small-img/Eng.svg'
import Burmese from '../components/small-img/Burmese.svg'
export const CampusMasterPlan = () => {
  return (
    <div className='mx-auto col-lg-10 col-12'>
      <h3 style={{color: "#103F54", fontWeight: "700"}}>Campus Master Plan</h3>
      <div className='d-flex justify-content-between align-items-lg-center flex-wrap'>
        <div className='col-lg-4 col-sm-12 mt-4 p-2'>
          <p className='text-justify'>During the 5th term of Yangon Technological University Students' Union, the union has successfully participated in a part of the sustainable and developed programs and accompanied with the university authority for the YTU campus master plan. </p>
        </div>
        <div className='col-lg-7 col-12'>
          <CampusMasterPlanPhoto 
            firstImg={ULuPawGate} firstplaceName="U Lu Paw Gate"
            secondImg={RITYITYTU} secondplaceName="RIT YIT YTU"
            thirdImg={MainBuilding} thirdplaceName="Main Building"
          />

        </div>
      </div>
      <div className='mt-5 d-flex flex-column flex-column-reverse flex-lg-row justify-content-between align-items-center'>
        <div className='col-lg-4 col-sm-12'>
          <CampusPlanImage2 
            secondImg={GreenForestArea}
            secondplaceName="Green Forest Area"
            thirdImg={Buffer}
            thirdplaceName="Buffer &Visual Spine"
          />
        </div>
        <div className='text-justify col-lg-7 col-sm-12 p-2'>
          <p>
            Due to the master plan, the forest area (shady area) has been extended to create the green campus. Over 200 trees have been planted.
          </p>

          <p>As a milestone, the status for this accomplishment has been built in the buffer zone. In the case of the maintenance of landscape in front of the main building, the status of the establishment has been sustained similar to the original one with the help of the architecture student.</p>
          <p>Moreover, instead of the concrete pedestrian, the blocks have been substituted in order to permeate water into the soil by the pavement method.</p>
        </div>
        
      </div>
      <ThreeColumnComponent 
        title="Campus Master Plan" 
        subtitleOne="A plan to modernize university campus"
        subTextOne = "Campus Master Plan means the strategic plan for developing and maintaining the university’s campus to be modernized, fully facilitated and sustainably balanced in each and every sector."
        subtitleTwo ="“Campus Master Plan Support Team” from SU"
        subTextTwo = "Students’ Union formed a special team, “Campus Master Plan Support Team”, directed by the Vice President and co-directed by an executive."
        subtitleThree ="Supports campus renovation processes"
        subTextThree="Up to now, the Master Plan Support Team has been supporting campus renovation processes along with expanding the required academic zones and building plans and procedures. "
      />
      <div className='mt-5'>
        <h3 className='text-center'>Contributions</h3>
        <p className='text-center text-muted'>By 2020, Students’ Union could assist and support in:</p>
        <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-between gap-3'>
          <ImgCard cardImg={DinningHall} cardText="Renovation processes of historic building, the Butterfly dining hall"/>
          <ImgCard cardImg={SportsStadium} cardText="Building new modern multi-functional sport stadium"/>
          <ImgCard cardImg={Hostel} cardText="Strategic planning for expanding students, teachers and staffs hostels and housing"/>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-center'>Environmental Analysis</h3>
        <div className='d-flex flex-lg-row flex-column justify-content-between gap-5 mt-4'>
          <div className='col-lg-5 col-sm-12 p-2'>
            <p style={{textAlign: "justify",
            textJustify: "inter-word"}}>
              The Association of Architecture Students from Yangon Technological University, AAS-YTU has performed an environmental analysis of the neighborhood of the YTU campus. Its main objective is for the wellbeing of the campus which largely affect the Education of YTUians and the life conditions of residences in the campus.
            </p>
          </div>
          <div className='col-lg-10 col-12'>
              <div>
                <EnvironmentalAnalysis 
                  img={Eng} language="English"
                />
              </div>
              <div className='mt-3'>
                <EnvironmentalAnalysis 
                  img={Burmese} language="Burmese"
                />
              </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
