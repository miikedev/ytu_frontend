import React from 'react'
import AboutImg from '../section/photos/AboutImg.png'
import './css/About.css'
import { AboutSectionComponent } from '../components/AboutSectionComponent'
import { HistoryContianer } from '../section/HistoryContianer'
import { CampusContainer } from '../section/CampusContainer'
import { Accordion } from '../components/Accordion'
import { accordionData } from '../data/AccordionData'
export const About = () => {
 
   return (
    <div>
       <div style={{backgroundImage: `url(${AboutImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "50vh"}} className='col-12'>
        <div className='glass col-12 p-5 h-100 d-flex justify-content-center align-items-center'>
            <div><p className='text-center fs-1 text-light'>About Us</p></div>
        </div>
       </div>
       <div className='col-12'>
            <AboutSectionComponent 
               header='Our History'
               firstText="The origin of the Student Organization of YTU, formerly known as Rangoon Institute of Technology, founding date goes back to the late 60s. After the 1988 Uprising, Unions had to act underground as Junta violently cracked down on its movement. The military regime closed undergraduate courses of University in 1997 and reopened all courses in 2012."
               secondText="In 2014, the first students’ association in Yangon Technological University was formed in the name of Yangon Technological University Students’ Network. In the 2015-2016 academic years, according to students’ survey and referendum, it was later renamed and renamed as Yangon Technological University Students’ Union. The Union serves as the voice of the students; protecting the rights of the students and creating opportunities for them."
               thirdText="Now, in the Spring Revolution, we are moving forward as a resistance union to the junta."
               imgContainer={<HistoryContianer />}
            />
            <div>{/* Some Imgaes Here*/}</div>
       </div>
       <div>
            <AboutSectionComponent 
                header="Student Rights"
                firstText="Protecting the student rights is one of the most important responsibilities of a students' union."
                secondText="These include coordinating with the University Council to ensure the students receive the education and facilities they deserve, freedom of expression within the campus and academic freedom as well as tackling challenges that occur occasionally."
            />
       </div>
       <div className='mt-4 col-12'>
            <AboutSectionComponent 
                header="Campus Life"
                firstText="We believe that a vivid campus life is an essential and complementary part of university education and approaches in 2 ways towards it. The Union facilitates the student clubs of YTU to run weekly activities, occasionally organizing competitions such as Union Futsal Cups."
                secondText="Moreover, the Union hosts events like Fresher Welcome and SU day to strengthen the bonds between students as well as seminars, talks and workshop which features professionals and scholars to help the students improve their knowledge and soft-skills."
                imgContainer= {<CampusContainer />}
            />
       </div>
       <div className='mt-4'>
            <AboutSectionComponent 
                header="Union Constitution and Bylaws"
                firstText="The constitution is the main backbone of the students' union. It includes 13 chapters and elections are held once a year. It has been updated in accordance with the political and educational situation throughout the executive terms."
                secondText="Bylaws is the regulation of the Union's departments and teams. It describes the responsibility of each department & team as well as of leaders and members."
                thirdText="For security reasons, these are not published here. If you want to read more details of the constitution and bylaws, please inquire at ytusu.mm@gmail.com."
            />
       </div>
       <div className='col-lg-11 col-12 mx-auto mt-4'>
        <h4>Find the answer to our <span style={{color: "#103F54"}}><i>Frequently Asked Questions</i></span></h4>
       <Accordion />
       </div>
    </div>
  )
}
