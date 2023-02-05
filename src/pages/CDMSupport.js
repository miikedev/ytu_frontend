import React from 'react'
import { PageTitle } from '../components/PageTitle'
import { OulineBtn } from '../components/OulineBtn'
import { CDMSupport1 } from '../components/CDM_Support/CDMSupport1'
import { CDMSupport2 } from '../components/CDM_Support/CDMSupport2'
export const CDMSupport = () => {
  return (
    <div>
        <PageTitle pageTitle="Civil Disobedience Movement(CDM) Support"/>
        <p className='col-lg-9 col-md-11 col-sm-12 mt-4 text-center mx-auto'>ရန်ကုန်နည်းပညာတက္ကသိုလ်တွင် Civil Disobedience Movement ကို တစ်ကျောင်းလုံးအတိုင်းအတာဖြင့်ဆောင်ရွက်လျက်ရှိသည်။ လက်ရှိတွင် တက္ကသိုလ်၌ တာဝန်ထမ်းဆောင်လျက်ရှိသော ဝန်ထမ်းပေါင်း ၆၉၆ ဦး ရှိပြီး ၄၉ ရာခိုင်နှုန်းမှာ အရာထမ်းများဖြစ်၍ ကျန် ၅၁ ရာခိုင်နှုန်းမှာ အမှုထမ်းများဖြစ်ကြပါသည်။တိုင်းပြည်အနာဂတ်၏ အဆုံးအဖြတ်ဖြစ်သော CDM လှုပ်ရှားမှုသည် အရာထမ်းမိသားစုအများစု၏ စားဝတ်နေရေးအပေါ် သက်ရောက်မှု နည်းပါးနိုင်သော်လည်း အမှုထမ်းမိသားစုများအတွက်မူ အခက်အခဲများ ကြုံတွေ့နိုင်မှုများအပေါ် ထည့်သွင်းစဉ်းစားရမည်ဖြစ်သောကြောင့် Civil Disobedience Movement ကို လက်တွေ့ပါဝင်လုပ်ဆောင်နိုင်သူများအတွက် ရေရှည်တွင် ကြောင့်ကြမှုကင်းစွာ ပါဝင်နိုင်ရန် အရေးကြီးလှသည်။ တိုင်းပြည်သည် စစ်အုပ်စု၏ လက်အောက်မှ ရုန်းထွက်နိုင်ရန် ဤသို့ ရန်ကုန်နည်းပညာတက္ကသိုလ်မှ အရာထမ်း၊ အမှုထမ်းများသည် တစ်ထောင့်တစ်နေရာမှ အားဖြည့်လျက်ရှိရာ ပြည်သူလူထုမှလည်း ဝိုင်းဝန်းစောင့်ရှောက်ရန် လိုအပ်လှသည်။ သို့ဖြစ်ရာ အရာထမ်း၊ အမှုထမ်းများကို အားပေးကူညီလိုပါက “CDM Support for RIT YIT YTU Heroes” Facebook Page Messenger မှတစ်ဆင့် ဘဏ်အကောင့်နှင့် မိုဘိုင်းဘဏ်အကောင့်များကို တောင်းယူကာ ဆက်သွယ်ကူညီနိုင်ပါသည်။</p>
        <div className='mx-auto text-center'>
            <OulineBtn btnName="Donate Now"/>
        </div>
        <CDMSupport1 />
        <CDMSupport2 />
    </div>
  )
}
