import React from 'react'
import { Carousel } from '../components/Carousel'
import { PageTitle } from '../components/PageTitle'
import { Card } from '../components/Card'
import { YTU_SU_Campaign, YTU_SU_Protest } from '../data/CarouselData'
export const GroundMovements = () => {
  return (
    <div>
        <PageTitle pageTitle="Ground Movements/Strikes"/>
        <p className='col-9 mt-4 text-center mx-auto'>Since Feb 1, 2021 Coup d'état, the union has  called for strikes both on ground and online. For the first two months of coup, the union was able to organize massive protests and ground movements. Due to violent crack down and shooting on protests, the movement of revolution shifted to arm resistance. The strikers changed protests to flash mobs strikes and the union has been supporting and participating in them up to this day.</p>
        <div>
          <div className='px-4'>
            <Card title="YTUSU Photo Campaign"/>
          </div>
          <Carousel imgData={YTU_SU_Campaign}/>
        </div>
        <div>
          <div className='px-4'>
            <Card title="YTUSU Protests"/>
          </div>
          <Carousel imgData={YTU_SU_Protest}/>
        </div>
    </div>
  )
}
