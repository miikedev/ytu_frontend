import React from 'react'
import { news } from '../data/Data'
import { NewsComponent } from '../components/NewsComponent'
import '../components/Card.css'
export const RecentNews = () => {
  return (
    <div>
        <h3 className='text-center text text-color'><u className='underline-style'>News</u></h3>
        <div className='mx-auto col-12 d-flex justify-content-center flex-wrap gap-4'>
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
