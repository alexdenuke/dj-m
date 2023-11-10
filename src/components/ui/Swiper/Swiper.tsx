// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";

export default () => {
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
};

// className=''
// modules={[Pagination, Autoplay]}

// style={{ height: '300px' }}
// spaceBetween={50}
// slidesPerView={1}
// onSlideChange={() => console.log('slide change')}
// onSwiper={(swiper) => console.log(swiper)}
// pagination={{ clickable: true }}
// loop={true}
// autoplay={{
//     delay: 5000,
//     disableOnInteraction: false,
// }}

{
  /* <SwiperSlide className='relative'>
                <Image
                    className=''
                    src={image1}
                    alt='Description of Image'
                    fill={true}
                    style={{objectFit: "cover"}}
                    priority={true}
                    placeholder="blur"
                />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image
                    className=''
                    src='/slide2.png'
                    alt='Description of Image'
                    fill={true}
                    style={{objectFit: "cover"}}
                    priority={true}
                />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image
                    className=''
                    src='/slide3.png'
                    alt='Description of Image'
                    fill={true}
                    style={{objectFit: "cover"}}
                    priority={true}
                />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <Image
                    className='max-w-7xl mx-auto w-full'
                    src='/slide4.png'
                    alt='Description of Image'
                    fill={true}
                    style={{objectFit: "cover"}}
                    priority={true}
                />
            </SwiperSlide> */
}
