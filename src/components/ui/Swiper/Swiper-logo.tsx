// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      className="  h-14 my-10"
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
      <SwiperSlide className="">
        <Link className="" href="/" id="link">
          <Image
            className=""
            src="/pioneer.png"
            fill={true}
            style={{ objectFit: "contain" }}
            // width={200}
            // height={43} // Округленное значение высоты
            alt="Description of Image"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide className="">
        <Link className="" href="/" id="link">
          <Image
            className=""
            src="/vestax.png"
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Description of Image"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide className="">
        <Link className="" href="/" id="link">
          <Image
            className=""
            src="/yamaha.jpg"
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Description of Image"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide className="">
        <Link className="" href="/" id="link">
          <Image
            className=""
            src="/pioneer.png"
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Description of Image"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide className="">
        <Link className="" href="/" id="link">
          <Image
            className=""
            src="/pioneer.png"
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Description of Image"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};
