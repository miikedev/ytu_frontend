import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { YTU_SU_Campaign as carousel_data } from '../data/CarouselData';
export const Carousel = (props) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
    spaceBetween={10}
    slidesPerView={3}
    effect="coverflow"
    pagination={{ clickable: true }}
    
    autoplay={{delay: 1000}}
    
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
    {props.imgData.map(item => 
        <SwiperSlide className='mt-3 col-12' key={item.id}>
            <div className='col-12'>
                <img className='col-12' src={item.imgSrc}/>
            </div>            
        </SwiperSlide>)}
    
    
    ...
    
  </Swiper>
  )
}
