import React from 'react'
import { Hero } from '../section/Hero'
import { Banner } from '../section/Banner'
import { Union } from '../section/Union'
import { Mission } from '../section/Mission'
import { News } from '../section/News'
import { Campaign } from '../section/Campaign'

export const Home = () => {
  return (
    <div className='col-12' id='home'>
        <Hero />
        <div>
          <Banner />
        </div>
        <div className='col-lg-11 col-12 mx-auto'>
          <Union />
          <Mission />
          <News />
          <Campaign />
        </div>
        {/* <Union />
        <Mission />
        <News />
        <Campaign /> */}
    </div>
  )
}
