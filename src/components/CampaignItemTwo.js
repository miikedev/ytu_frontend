import React from 'react'

import CamOne from '../section/photos/cam2_1.png'
import CamTwo from '../section/photos/cam2_2.png'
import CamThree from '../section/photos/cam2_3.png'
import CamFour from '../section/photos/cam2_4.png'
import { OulineBtn } from './OulineBtn'
export const CampaignItemTwo = () => {
  return (
    <div className='d-flex flex-column flex-lg-row mt-5 align-items-center justify-content-center gap-3'>
        <div className='col-lg-6 col-sm-12 d-flex flex-wrap align-items-center'>
            <div>
                <img src={CamOne}/>
            </div>
            <div>
                <img src={CamTwo}/>
            </div>
            <div>
                <img src={CamThree}/>
            </div>
            <div>
                <img src={CamFour}/>
            </div>
        </div>
        <div className='col-lg-4 col-sm-12'>
            <h5 className='fw-semibold'>✨စိန်ရွှေရတနာ set လိုက်ယူ.. CDM နဲ့ ရဲဘော်ကူ✨</h5>
            <p className='mt-4'>စိန်ရွှေရတနာ Campaign အတွက် မဲလက်မှတ်တွေကိုတော့ July 22 မှ Aug 4 ရက်နေ့အထိ နှစ်ပတ်တိုင်တိုင် ရောင်းချပေးသွားမှာပါ။ Ticket တစ်စောင်လျှင် မြန်မာငွေ "8000 ကျပ်" ကျသင့်မှာဖြစ်ပြီး မိုးရာသီ Promotion အနေနဲ့ 2 စောင်ဝယ်မယ်ဆိုရင် 15000 ကျပ်သာ ကျမှာဖြစ်ပါတယ် </p>
            <p className='mt-4'>မဲလက်မှတ်များကိုတော့<br/>Messenger ➡️m.me/FundraisingByYTUSU <br/> 
            Telegram➡️ t.me/ytusu က‌‌နေဆက်သွယ်ဝယ်ယူနိုင်ပါတယ်...</p>
            <OulineBtn btnName="Buy Tickets"/>
        </div>
    </div>
  )
}
