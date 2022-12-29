import React from 'react'
import CDM_Uni from './photos/CDM_Uni.svg'
import UnionFlag from './photos/UnionFlag.svg'
import Monument from './photos/Monument.svg'
import HandDrawingOne from './photos/HandDrawingOne.svg'
import HandDrawingTwo from './photos/HandDrawingTwo.svg'
import HandDrawingThree from './photos/HandDrawingThree.svg'
import { ThreeColumnComponent } from '../components/ThreeColumnComponent'
import './css/CampusMasterPlan.css'
import { CharterCard } from '../components/CharterCard'
export const AutonomyCharter = () => {
  return (
    <div className='col-lg-10 mx-lg-auto col-sm-12 text-justify'>
      <h3 className='p-2' style={{color: "#103F54", fontWeight: "700"}}>Autonomy & Charter</h3>

      <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-lg-center align-items-start'>
        <div className='col-lg-6 col-md-5 col-sm-12 p-2'>
          <p>Within the university, one must be assured to avoid the manners towards the organizations varying from democracy. </p>
          <p>The Charter shapes the future of the university thus one should be aware of composing it in order to avoid from unnecessary deviations. </p>
        </div>
        <div className='col-lg-4 col-12 col-md-6'>
          <img className='col-12' src={CDM_Uni}/>
        </div>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center mt-3'>
        <div className='col-lg-4 col-12 col-md-6'>
          <img className='col-12' src={UnionFlag}/>
        </div>
        <div className='col-lg-6 col-md-5 col-sm-12 p-2'>
          <p>
            It is said that the Charter which was written in 2014 has not been issued until 2019 hence this case was presented to the Union Minister of the Ministry of Education 
          </p>
          <p>
            He encouraged for the public involvement in composing the Charter. 
          </p>
        </div>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center'>
        <div className='col-lg-6 col-md-5 col-sm-12 p-2'>
          <p>Therefore, the COE Committee led to make Charter Meetings but because of the lack of time factor, the Rector led the meetings again to write the Charter as a whole.</p>
          <p>As the result of the meetings led by the Rector, we can now announce the YTU Charter which was discussed among not only the teachers but also the students and the staffs of the university. </p>
        </div>
        <div className='col-lg-4 col-12 col-md-6'>
          <img className='col-12' src={Monument}/>
        </div>
      </div>

      <ThreeColumnComponent 
        title="University Autonomy"
        subtitleOne="Supports the process of becoming an autonomous university"
        subTextOne="The Students' Union 
        has been supporting 
        the processes 
        in the university 
        becoming 
        an autonomous university."
        subtitleTwo="Involves in writing regulations and future plans"
        subTextTwo="In order to get autonomy, there are 8 criteria or dimensions to be checked by the legals. Students’ Union has been involved in writing regulations and future plans for each dimension, getting ideas and consultations from related professionals and legal experts."
        subtitleThree="Supports the process of improving infrastructure and operations"
        subTextThree="Students’ Union has been supporting not only in processes dealing to get autonomy but also in getting the university ready in both infrastructure and operations after being regarded as an autonomous university."
      />

      <div className='mt-4'>
        <h3 className='text-center mb-4'>University Charter</h3>
        <div className='d-flex flex-lg-row flex-column flex-md-row justify-content-between gap-2'>
          <CharterCard 
            ImgSrc={HandDrawingOne}
            cardText="Writing the university Charter, 
            which is to include the university’s structure and operations, was begun in 2019 
            with the democratically 
            inclusive of all positions and
             levels of teachers, staff and students."
          />
          <CharterCard 
            ImgSrc={HandDrawingTwo}
            cardText="During YTU Charter writing and establishing processes, the students' union was deeply involved and assisted each process by a special team, Charter Support Team, formed with Students’ Union members and directed by SU President."
          />
          <CharterCard 
            ImgSrc={HandDrawingThree}
            cardText="Students’ Union has succeeded 
            in making every related person involved in the processes 
            and furthermore, still 
            trying and assisting at 
            all efforts to establish the details 
            as Regulations."
          />
        </div>
      </div>
    </div>
  )
}
