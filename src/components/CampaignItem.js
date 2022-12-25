import React from 'react'
import { OulineBtn } from './OulineBtn'
import ImgOne from '../section/photos/sitbayshaung1.png'
import ImgTwo from '../section/photos/sitbayshaung2.png'
import ImgThree from '../section/photos/sitbayshaung3.png'
import ImgFour from '../section/photos/sitbayshaung4.png'

export const CampaignItem = () => {
  return (
    <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 flex-column flex-lg-row'>
        <div className='col-lg-4 col-sm-8 col-md-12'>
            <h5 className='fw-semibold'>ရဲဘော်၊စစ်ရှောင်နှင့်ကလေးတွေအတွက်အသားဟင်း၊အာဟာရဒါနနှင့်မုန့်အလှူလုပ်လို့ရပါတယ်</h5>
            <p className='mt-4'>📌ထမင်းနှင့်အသားဟင်း လူ(၁၀၀)စာ 180,000ကျပ်</p>
            <p>📌မုန့်နှင့်အအေး လူ(၁၀၀)စာ 70,000 ကျပ်</p>
            <p className='mt-4'>လှူဒါန်းချင်သူတွေအနေနဲ့အသေးစိတ်ကို m.me/FundraisingbyYTUSUမှာစုံစမ်းစီစဥ်နိုင်ပါတယ်...</p>
            <OulineBtn btnName="Donate Now"/>
        </div>
        <div className='d-flex flex-wrap col-lg-5 col-sm-12 col-md-12'>
          <div>
            <img src={ImgOne}/>
          </div>
          <div>
            <img src={ImgTwo} />
          </div>
          <div>
            <img src={ImgThree} />
          </div>
          <div>
            <img src={ImgFour} />
          </div>
          
        </div>

    </div>
  )
}
