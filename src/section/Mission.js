import React from 'react'
import { Card } from '../components/Card'
import { MissionComponent } from '../components/MissionComponent'

export const Mission = (props) => {
  const data=props.data
  return (
    <div className='mt-4'>
        <Card 
            title={data?.title}
            content={<MissionComponent description={data?.description} photo={data?.photo}/>}
        />
    </div>
  )
}
