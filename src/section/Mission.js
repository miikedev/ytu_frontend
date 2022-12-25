import React from 'react'
import { Card } from '../components/Card'
import { MissionComponent } from '../components/MissionComponent'

export const Mission = () => {
  return (
    <div className='mt-4'>
        <Card 
            title="OUR MISSION"
            content={<MissionComponent />}
        />
    </div>
  )
}
