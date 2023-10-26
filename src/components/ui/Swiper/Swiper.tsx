// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import styles from './Swiper.module.scss'
import slide from '/public/slide1.png'



export default () => {
  return (

    
    <Swiper className='' style={{ height: '500px' }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='' >
      <Image className={styles.img}
          src={slide}
          alt="Description of Image"
          fill={true}
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image className=''
          src="/slide2.png"
          alt="Description of Image"
          fill={true}
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image className=''
          src="/slide3.png"
          alt="Description of Image"
          fill={true}
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
      <Image className='max-w-7xl mx-auto w-full'
          src="/slide4.png"
          alt="Description of Image"
          fill={true}
          
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
};