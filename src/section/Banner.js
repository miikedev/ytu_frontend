import React from 'react'
import { DonateBtn } from '../components/DonateBtn'
import BannerImg from '../components/small-img/BannerImg.png'
import './css/Banner.css'
export const Banner = () => {
  return (
    <div clssName="col-12">
      <div className='banner d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column  p-3'>
        <div>
          <img className="col-lg-10 col-12 col-md-10" src={BannerImg}/>
        </div>
        <div className='col-sm-12 col-lg-6 col-md-5'>
          <h3 className='header'>"လစဉ်ထောက်ပို့ စွယ်တော်မြေဖို့"</h3>
          <h4 className='mt-3'>For BIT-RIT-YIT alumini and students</h4>
          <p>Pledge monthly contributions towards the revolutionary sectors of YTU</p>
          <DonateBtn style={{backgroundColor: "#103F54", border: "none"}}/>
        </div>
      </div>
    </div>
  )
}
