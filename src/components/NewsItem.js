import React from 'react'
import { news } from '../data/Data'
import { NewsComponent } from './NewsComponent'
export const NewsItem = () => {
  return (
    <div className='d-flex justify-content-between flex-wrap gap-1'>
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

