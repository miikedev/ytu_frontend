import React from 'react'
import { news } from '../data/Data'
import { NewsComponent } from '../components/NewsComponent'
import '../components/Card.css'
import { PageTitle } from '../components/PageTitle'
export const RecentNews = () => {
  return (
    <div>
        <PageTitle pageTitle="News"/>
        <div className='col-12 justify-content-center align-items-start d-flex flex-wrap gap-4 mt-5'>
        {news.map((item) => 
            <NewsComponent
                key={item.id}  
                ImgSrc={item.img}
                RightImgSrc={item.right_img}
                date={item.date}
                category={item.category}
                title={item.title}
            />
        )}
        </div>
    </div>
  )
}
