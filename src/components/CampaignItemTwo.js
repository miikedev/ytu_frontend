import React from 'react'

import CamOne from '../section/photos/cam2_1.png'
import CamTwo from '../section/photos/cam2_2.png'
import CamThree from '../section/photos/cam2_3.png'
import CamFour from '../section/photos/cam2_4.png'
import { OulineBtn } from './OulineBtn'
export const CampaignItemTwo = (props) => {
    let data=props.data
    let title=data?.title
    let description=data?.description
    let content_photos=data?data?.content_photos:[]
    let donate_link=data?.donate_link

  return (
    <div className='d-flex justify-content-between align-items-center align-items-md-start flex-column flex-column-reverse flex-lg-row mt-5 flex-md-row gap-1'>
        <div className='col-lg-6 col-md-6 col-12 d-flex flex-wrap align-items-center'>
            {
                content_photos.map((item) => (
                    <div className='col-lg-6 col-12 col-md-6' key={item.id}>
                        <img className='col-12' src={item?.photo} alt=""/>
                    </div>
                )).slice(0,4)
            }
           
        </div>
        <div className='col-lg-5 col-sm-12 col-md-6'>
            <h5 className='fw-semibold'>{title}</h5>
            <p className='mt-4'>{description} </p>
            {/* <p className='mt-4'>မဲလက်မှတ်များကိုတော့<br/>Messenger ➡️m.me/FundraisingByYTUSU <br/> 
            Telegram➡️ t.me/ytusu က‌‌နေဆက်သွယ်ဝယ်ယူနိုင်ပါတယ်...</p> */}
            <OulineBtn btnName="Donate"/>
        </div>
    </div>
  )
}
