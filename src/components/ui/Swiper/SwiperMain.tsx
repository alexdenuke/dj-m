// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";

const SwiperMain = () => {
  return (
    <Swiper
      className=" h-56 md:h-80"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
        
          src="/slide1.png"
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide2.png"
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide3.png"
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide4.png"
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}


export default SwiperMain;