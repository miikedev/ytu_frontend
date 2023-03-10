import React from 'react'
import { OulineBtn } from './OulineBtn'
import ImgOne from '../section/photos/sitbayshaung1.png'
import ImgTwo from '../section/photos/sitbayshaung2.png'
import ImgThree from '../section/photos/sitbayshaung3.png'
import ImgFour from '../section/photos/sitbayshaung4.png'

export const CampaignItem = (props) => {
  let data=props.data

  let title=data?.title
  let description=data?.description
  let content_photos=data?data?.content_photos:[]
  let donate_link=data?.donate_link
  return (
    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center flex-md-row gap-1'>
        <div className='col-lg-5 col-12 col-md-6'>
            <h5 className='fw-semibold'>{title}</h5>
            <p className='mt-4'>{description}</p>
            {/* <p>📌မုန့်နှင့်အအေး လူ(၁၀၀)စာ 70,000 ကျပ်</p>
            <p className='mt-4'>လှူဒါန်းချင်သူတွေအနေနဲ့အသေးစိတ်ကိုm.me/FundraisingbyYTUSUမှာစုံစမ်းစီစဥ်နိုင်ပါတယ်...</p> */}
            <OulineBtn btnName="Donate Now"/>
        </div>
        <div className='d-flex flex-wrap col-lg-6 col-12 col-md-6'>

        {content_photos.map((item) => (
          <div className="col-lg-6 col-12 col-md-6" key={item.id} >
            <img className="col-12" src={item?.photo}  alt=""/>
          </div>
        )).slice(0,4)}

          {/* <div className='col-lg-6 col-12 col-md-6'>
            <img className='col-12' src={ImgOne}/>
          </div>
          <div className='col-lg-6 col-12 col-md-6'>
            <img className='col-12' src={ImgTwo} />
          </div>
          <div className='col-lg-6 col-12 col-md-6'>
            <img className='col-12' src={ImgThree} />
          </div>
          <div className='col-lg-6 col-12 col-md-6'>
            <img className='col-12' src={ImgFour} />
          </div> */}
          
        </div>

    </div>
  )
}
