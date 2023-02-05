import React from 'react'
import {OulineBtn} from '../OulineBtn'
import { Article } from './Article'
import Support1 from './photos/CDMSupport1.png'
import Support2 from './photos/CDMSupport2.png'
import Support3 from './photos/CDMSupport3.png'
import Support4 from './photos/CDMSupport4.png'
export const CDMSupport1 = () => {
  const TextComponent = () => {
    return(
        <div>
            <h5 className='fw-semibold'>YTU ကျောင်းဝင်းအတွင်းရှိ CDM တွင်ပါဝင်သောအမှုထမ်း၊အရာထမ်းများအားစားနပ်ရိက္ခာများသွားရောက်ထောက်ပံ့ချီးမြှင့်ခြင်း</h5>
            <p className='mt-5'>ယနေ့ မတ်လ ၂၆ ရက်နေ့တွင် YTU မှ တက်ရောက်နေသော ကျောင်းသားများနှင့် ကျောင်းသားဟောင်းများ၏ ပေးပို့ထောက်ပံ့လှူဒါန်းမှုကြောင့် YTU ကျောင်းဝင်းအတွင်းရှိ CDM အမှုထမ်း၊ အရာထမ်း အိမ်ထောင် (၁၅၅) စု အတွက် တစ်အိမ်ထောင်စုလျှင် 
            </p>
            <ul>
                <li>ဆန် - ၆ ပြည်</li>
                <li>ဆီ - ၁ လီတာဘူး </li>
                <li> ကြက်ဥ - ၉ လုံး </li>
                <li>အာပြဲခြောက်၊ ဖျာလှန်းငါးခြောက် တစ်ထုပ်နှုန်းကျဖြင့် သွားရောက်ကာ<br/> ထောက်ပံ့ချီးမြှင့်ပေးခဲ့ပါသည်။...</li>
            </ul>
            <OulineBtn btnName="Read More"/>
        </div>
            
    )
  }
  const ImageComponent = () => {
    return (
        <div className='d-flex justify-content-lg-end justify-content-center flex-wrap gap-1 mt-3 mt-lg-0'>
            <div className='col-lg-5 col-5'>
                <img className='col-12' src={Support1}/>
            </div>
            <div className='col-lg-5 col-5'>
                <img className='col-12' src={Support2}/>
            </div>
            <div className='col-lg-5 col-5'>
                <img className='col-12' src={Support3}/>
            </div>
            <div className='col-lg-5 col-5'>
                <img className='col-12' src={Support4}/>
            </div>
        </div>
    )
  }
  return (
    <div className='mt-4 py-5' style={{background: "rgba(16, 63, 84, 0.05)"}}>
        <Article textContent={<TextComponent />} imgContent={<ImageComponent />}/>
    </div>
  )
}

            
            
             