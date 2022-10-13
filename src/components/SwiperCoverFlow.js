import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectCoverflow, Pagination } from "swiper";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function SwiperCoverFlow(props) {
  const dataItem = props.dataItem;
  return (
    <div className="mx-10 md:mx-16 lg:mx-36 md:pt-20 pt-10">
      <div className="flex space-x-9 items-center md:mb-10 mb-4">
        <h1 className="text-2xl md:text-4xl inline-block text-cyan-900 tracking-tight md:w-1/2 w-full">
          {dataItem.title}
        </h1>
        <div className="hidden sm:inline-block h-0.5 w-1/2 bg-cyan-900 "></div>
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            // navigation
            pagination
            effect="coverflow"
            speed={800}
            slidesPerView={3}
            loop
          >
            {dataItem.imgSrc.map((imgData) => (
              <SwiperSlide key={`swiper-${imgData}`} className="">
                <img
                  className="object-fit"
                  src={imgData}
                  alt="YTU Spring Revolution gallery"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SwiperCoverFlow;
