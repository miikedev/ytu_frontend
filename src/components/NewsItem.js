import React from 'react'
import { news } from '../data/Data'
import { NewsComponent } from './NewsComponent'
export const NewsItem = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-row gap-lg-3 gap-md-1 mt-3 col-12'>
        {news.map((item) => 
            <NewsComponent
                key={item.id}  
                ImgSrc={item.img}
                RightImgSrc={item.right_img}
                date={item.date}
                category={item.category}
                title={item.title}
            />
        ).slice(0,3)}
    </div>
  )
}

