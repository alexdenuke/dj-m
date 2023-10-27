// Import Swiper React components
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import image1 from '/public/slide1.png'

export default () => {
    return (
        <Swiper
        className=''
            modules={[Pagination, Autoplay]}
            
            style={{ height: '300px' }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className='relative'>
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
            </SwiperSlide>
        </Swiper>
    );
};
