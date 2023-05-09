import React from 'react'
import { DonateBtn } from '../components/DonateBtn'
import BannerImg from '../components/small-img/BannerImg.png'
import './css/Banner.css'
export const Banner = () => {
  return (
    <div className='col-12'>
      <div className='banner py-2 px-2'>
        <div className='col-lg-11 col-12 mx-auto d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-lg-5 gap-2 gap-md-4'>
          <div className='col-lg-3 col-10 col-md-4'>
            <img className="col-12" src={BannerImg}/>
          </div>
          <div className='col-sm-12 col-lg-6 col-md-6'>
            <h3 className='header'>"လစဉ်ထောက်ပို့ စွယ်တော်မြေဖို့"</h3>
            <h4 className='mt-3'>For BIT-RIT-YIT alumini and students</h4>
            <p>Pledge monthly contributions towards the revolutionary sectors of YTU</p>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-L7ExFfE1HolHmYxSsX3OUBngd0NluHLtw7y0Zsp-uAVOBQ/viewform'> 
              <button className='text-white rounded p-2' style={{backgroundColor: "#103F54", border: "none"}}>Donate Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
