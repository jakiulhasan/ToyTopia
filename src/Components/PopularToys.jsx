import React from "react";
import { Link } from "react-router";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ToysCard from "./ToysCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PopularToys = ({ popularToys }) => {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold border-b-2 border-base-300 mb-10">
        <span className="text-primary border-b-2 border-secondary">
          Best Selling
        </span>{" "}
        Products
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10" // extra space for pagination
      >
        {popularToys.map((popularToy) => (
          <SwiperSlide key={popularToy._id} className="mb-10">
            {/* margin bottom so pagination doesn't overlap */}
            <ToysCard popularToy={popularToy} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link
        to="/all-toys"
        className="btn btn-primary mx-auto flex justify-center w-fit my-5"
      >
        View All Toys
      </Link>
    </div>
  );
};

export default PopularToys;
