import React from 'react'
import {OulineBtn} from '../OulineBtn'
import { Article } from './Article'
export const CDMSupport1 = () => {
  const TextComponent = () => {
    return(
        <div>
            <h4>YTU ကျောင်းဝင်းအတွင်းရှိ CDM တွင်ပါဝင်သောအမှုထမ်း၊အရာထမ်းများအားစားနပ်ရိက္ခာများသွားရောက်ထောက်ပံ့ချီးမြှင့်ခြင်း</h4>
            <p>ယနေ့ မတ်လ ၂၆ ရက်နေ့တွင် YTU မှ တက်ရောက်နေသော ကျောင်းသားများနှင့် ကျောင်းသားဟောင်းများ၏ ပေးပို့ထောက်ပံ့လှူဒါန်းမှုကြောင့် YTU ကျောင်းဝင်းအတွင်းရှိ CDM အမှုထမ်း၊ အရာထမ်း အိမ်ထောင် (၁၅၅) စု အတွက် တစ်အိမ်ထောင်စုလျှင် 
            </p>
            <ul>
                <li>ဆန် - ၆ ပြည်</li>
                <li>ဆီ - ၁ လီတာဘူး </li>
                <li> ကြက်ဥ - ၉ လုံး </li>
                <li>အာပြဲခြောက်၊ ဖျာလှန်းငါးခြောက် တစ်ထုပ်နှုန်းကျဖြင့်</li>
            </ul>
            <p>သွားရောက်ကာ ထောက်ပံ့ချီးမြှင့်ပေးခဲ့ပါသည်။...</p>
            <OulineBtn btnName="Read More"/>
        </div>
            
    )
  }
  return (
    <div>
        <Article textContent={<TextComponent />}/>
    </div>
  )
}

            
            
             