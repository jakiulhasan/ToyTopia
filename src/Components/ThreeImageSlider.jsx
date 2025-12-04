import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ThreeImageSlider = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=""
      >
        {" "}
        <SwiperSlide>
          {" "}
          <img className="w-full mx-auto" src={slider1} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img className="w-full mx-auto" src={slider2} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img className="w-full mx-auto" src={slider3} alt="" />{" "}
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};
export default ThreeImageSlider;
