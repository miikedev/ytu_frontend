import React from 'react'
import { Card } from '../components/Card'
import { NewsComponent } from '../components/NewsComponent'
import { NewsItem } from '../components/NewsItem'

export const News = () => {

  return (
    <div className='mt-3'>
        <Card 
            title="RECENT NEWS"
            content={<NewsItem />}
        />
    </div>
  )
}
