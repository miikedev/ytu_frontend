import React from 'react'
import { Hero } from '../section/Hero'
import { Banner } from '../section/Banner'
import { Union } from '../section/Union'
import { Mission } from '../section/Mission'
import { News } from '../section/News'
import { Campaign } from '../section/Campaign'

export const Home = () => {
  return (
    <div>
        <Hero />
        <Banner />
        <Union />
        <Mission />
        <News />
        <Campaign />
    </div>
  )
}
