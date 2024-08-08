// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./category.css";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="py-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col">
          <img src={slide1} alt="" />
          <h2 className="uppercase text-white font-cinzel font-semibold -mt-20">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={slide2} alt="" />
          <h2 className="uppercase text-white font-cinzel font-semibold -mt-20">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={slide3} alt="" />
          <h2 className="uppercase text-white font-cinzel font-semibold -mt-20">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={slide4} alt="" />
          <h2 className="uppercase text-white font-cinzel font-semibold -mt-20">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={slide5} alt="" />
          <h2 className="uppercase text-white font-cinzel font-semibold -mt-20">
            Burger
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
