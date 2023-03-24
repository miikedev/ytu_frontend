import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Scrollbar, Autoplay, EffectCoverflow, EffectCube, EffectFlip } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip'
import 'swiper/css/a11y'
import { YTU_SU_Campaign as carousel_data } from '../data/CarouselData';
export const Carousel = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow, EffectCube, EffectFlip, A11y]}
      spaceBetween={60}
      slidesPerView={1}
      effect="coverflow"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{draggable: true}}
      autoplay={{delay: 2000}}
    
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
 
    {props.imgData.map(item => 
          <SwiperSlide className='mt-3 col-12' key={item.id}>
              <img className='col-12' src={item.photo} alt=""/>
          </SwiperSlide>
                        
    )} 
  
  </Swiper>
    
  )
}
