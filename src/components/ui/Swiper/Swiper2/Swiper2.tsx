// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { SwiperOptions } from "swiper/types";
import CardShort from "../../CardShort/CardShort";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      className=" mb-14"
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
      }}
      spaceBetween={40}
      slidesPerView={1}
    >
      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>

      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>

      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>

      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>

      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>

      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>

      <SwiperSlide>
      <CardShort/>
      </SwiperSlide>


    </Swiper>
  );
};
