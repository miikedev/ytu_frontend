import React from 'react'

import CamOne from '../section/photos/cam2_1.png'
import CamTwo from '../section/photos/cam2_2.png'
import CamThree from '../section/photos/cam2_3.png'
import CamFour from '../section/photos/cam2_4.png'
import { OulineBtn } from './OulineBtn'
export const CampaignItemTwo = () => {
  return (
    <div className='d-flex justify-content-between align-items-center align-items-md-start flex-column flex-column-reverse flex-lg-row mt-5 flex-md-row gap-1'>
        <div className='col-lg-6 col-md-6 col-12 d-flex flex-wrap align-items-center'>
            <div className='col-lg-6 col-12 col-md-6'>
                <img className='col-12' src={CamOne}/>
            </div>
            <div className='col-lg-6 col-12 col-md-6'>
                <img className='col-12' src={CamTwo}/>
            </div>
            <div className='col-lg-6 col-12 col-md-6'>
                <img className='col-12' src={CamThree}/>
            </div>
            <div className='col-lg-6 col-12 col-md-6'>
                <img className='col-12' src={CamFour}/>
            </div>
        </div>
        <div className='col-lg-5 col-sm-12 col-md-6'>
            <h5 className='fw-semibold'>✨စိန်ရွှေရတနာsetလိုက်ယူ.. CDMနဲ့ရဲဘော်ကူ✨</h5>
            <p className='mt-4'>စိန်ရွှေရတနာ Campaign အတွက် မဲလက်မှတ်တွေကိုတော့ July 22 မှ Aug 4 ရက်နေ့အထိ နှစ်ပတ်တိုင်တိုင် ရောင်းချပေးသွားမှာပါ။ Ticket တစ်စောင်လျှင် မြန်မာငွေ "8000 ကျပ်" ကျသင့်မှာဖြစ်ပြီး မိုးရာသီ Promotion အနေနဲ့ 2 စောင်ဝယ်မယ်ဆိုရင် 15000 ကျပ်သာ ကျမှာဖြစ်ပါတယ် </p>
            <p className='mt-4'>မဲလက်မှတ်များကိုတော့<br/>Messenger ➡️m.me/FundraisingByYTUSU <br/> 
            Telegram➡️ t.me/ytusu က‌‌နေဆက်သွယ်ဝယ်ယူနိုင်ပါတယ်...</p>
            <OulineBtn btnName="Buy Tickets"/>
        </div>
    </div>
  )
}
