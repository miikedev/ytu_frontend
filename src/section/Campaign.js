import React from 'react'
import { Card } from '../components/Card'
import { CampaignList } from './CampaignList'

export const Campaign = () => {
  return (
        <div className='mt-4'>
            <Card 
                title="RECENT CAMPAIGN"
                content={<CampaignList />}
            />
        </div>
    )
}
