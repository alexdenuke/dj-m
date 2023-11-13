// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
    className=" border-y-2  bg-white bg-opacity-70"
      spaceBetween={30}
      slidesPerView={2}
      breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        // when window width is >= 1024px
      }}
    >
      <SwiperSlide
      className="py-5">
        <Link className="flex justify-center" href="/" id="link">
        <Image
              className=""
              src="/pioneer.png"
              width={200}
              height={42} // Округленное значение высоты
              alt="Description of Image"
            />
        </Link>
      </SwiperSlide>

      <SwiperSlide
      className="py-5">
        <Link className="flex justify-center" href="/" id="link">
        <Image
              className=""
              src="/pioneer.png"
              width={200}
              height={42} // Округленное значение высоты
              alt="Description of Image"
            />
        </Link>
      </SwiperSlide>

      <SwiperSlide
      className="py-5">
        <Link className="flex justify-center" href="/" id="link">
        <Image
              className=""
              src="/pioneer.png"
              width={200}
              height={42} // Округленное значение высоты
              alt="Description of Image"
            />
        </Link>
      </SwiperSlide>

      <SwiperSlide
      className="py-5">
        <Link className="flex justify-center" href="/" id="link">
        <Image
              className=""
              src="/pioneer.png"
              width={200}
              height={42} // Округленное значение высоты
              alt="Description of Image"
            />
        </Link>
      </SwiperSlide>

      <SwiperSlide
      className="py-5">
        <Link className="flex justify-center" href="/" id="link">
        <Image
              className=""
              src="/pioneer.png"
              width={200}
              height={42} // Округленное значение высоты
              alt="Description of Image"
            />
        </Link>
      </SwiperSlide>
      

    </Swiper>
  );
};
