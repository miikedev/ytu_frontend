import React from 'react'
import { CampaignItem } from '../components/CampaignItem'
import { CampaignItemTwo } from '../components/CampaignItemTwo'

export const CampaignList = () => {
  return (
    <div className='p-2'>
        <CampaignItem />
        <CampaignItemTwo />
    </div>
  )
}
