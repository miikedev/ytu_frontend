import React from 'react'
import { DonateBtn } from '../components/DonateBtn'
import BannerImg from '../components/small-img/BannerImg.png'
import './css/Banner.css'
export const Banner = () => {
  return (
    <div>
      <div className='banner py-2'>
        <div className='col-lg-11 col-12 mx-auto d-flex flex-lg-row flex-md-row flex-column align-items-center gap-lg-5 gap-2 gap-md-4'>
        <div className='col-lg-3 col-12 col-md-4'>
          <img className="col-12" src={BannerImg}/>
        </div>
        <div className='col-sm-12 col-lg-6 col-md-6'>
          <h3 className='header'>"လစဉ်ထောက်ပို့ စွယ်တော်မြေဖို့"</h3>
          <h4 className='mt-3'>For BIT-RIT-YIT alumini and students</h4>
          <p>Pledge monthly contributions towards the revolutionary sectors of YTU</p>
          <DonateBtn style={{backgroundColor: "#103F54", border: "none"}}/>
        </div>
        </div>
      </div>
    </div>
  )
}
