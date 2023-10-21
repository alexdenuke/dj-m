// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper className='max-w-7xl mx-auto w-full' style={{ height: '300px' }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='' >
      <Image className=''
          src="/slide1.png"
          alt="Description of Image"
          layout='fill' // Адаптивное изменение размера
          objectFit='cover' // Изображение заполняет слайдер
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image className=''
          src="/slide2.png"
          alt="Description of Image"
          layout='fill' // Адаптивное изменение размера
          objectFit='cover' // Изображение заполняет слайдер
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image className=''
          src="/slide3.png"
          alt="Description of Image"
          layout='fill' // Адаптивное изменение размера
          objectFit='cover' // Изображение заполняет слайдер
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image className='max-w-7xl mx-auto w-full'
          src="/slide4.png"
          alt="Description of Image"
          layout='fill' // Адаптивное изменение размера
          objectFit='cover' // Изображение заполняет слайдер
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
};