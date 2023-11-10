// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { SwiperOptions } from "swiper/types";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      className="h-80 mb-14"
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
      }}
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide className="flex flex-col p-5">
        <div className="flex justify-center">
          <Image
            className="mb-5"
            src="/item1.png"
            alt="Picture of the author"
            width={200}
            height={200}
            // fill={true}
            // style={{objectFit: "contain"}}
          />
        </div>

        <Link className="text-center mb-5 block" href="/productCard" id="link">
          Описание
        </Link>
        <div className="flex justify-between">
          <div
            className="font-bold"          
          >Цена 100 р</div>
          <Link className="shrink-0" href="/" id="link">
          <Image
              className=""
              src="/plus-cart.svg"
              width={28}
              height={25} // Округленное значение высоты
              alt="Description of Image"
            />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex flex-col p-5">
        <div className="flex justify-center">
          <Image
            className="mb-5"
            src="/item1.png"
            alt="Picture of the author"
            width={200}
            height={200}
            // fill={true}
            // style={{objectFit: "contain"}}
          />
        </div>

        <Link className="text-center mb-5 block" href="/productCard" id="link">
          Описание
        </Link>
        <div className="flex justify-between">
          <div
            className="font-bold"          
          >Цена 100 р</div>
          <Link className="shrink-0" href="/" id="link">
          <Image
              className=""
              src="/plus-cart.svg"
              width={28}
              height={25} // Округленное значение высоты
              alt="Description of Image"
            />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex flex-col p-5">
        <div className="flex justify-center">
          <Image
            className="mb-5"
            src="/item1.png"
            alt="Picture of the author"
            width={200}
            height={200}
            // fill={true}
            // style={{objectFit: "contain"}}
          />
        </div>

        <Link className="text-center mb-5 block" href="/productCard" id="link">
          Описание
        </Link>
        <div className="flex justify-between">
          <div
            className="font-bold"          
          >Цена 100 р</div>
          <Link className="shrink-0" href="/" id="link">
          <Image
              className=""
              src="/plus-cart.svg"
              width={28}
              height={25} // Округленное значение высоты
              alt="Description of Image"
            />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex flex-col p-5">
        <div className="flex justify-center">
          <Image
            className="mb-5"
            src="/item1.png"
            alt="Picture of the author"
            width={200}
            height={200}
            // fill={true}
            // style={{objectFit: "contain"}}
          />
        </div>

        <Link className="text-center mb-5 block" href="/productCard" id="link">
          Описание
        </Link>
        <div className="flex justify-between">
          <div
            className="font-bold"          
          >Цена 100 р</div>
          <Link className="shrink-0" href="/" id="link">
          <Image
              className=""
              src="/plus-cart.svg"
              width={28}
              height={25} // Округленное значение высоты
              alt="Description of Image"
            />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex flex-col p-5">
        <div className="flex justify-center">
          <Image
            className="mb-5"
            src="/item1.png"
            alt="Picture of the author"
            width={200}
            height={200}
            // fill={true}
            // style={{objectFit: "contain"}}
          />
        </div>

        <Link className="text-center mb-5 block" href="/productCard" id="link">
          Описание
        </Link>
        <div className="flex justify-between">
          <div
            className="font-bold"          
          >Цена 100 р</div>
          <Link className="shrink-0" href="/" id="link">
          <Image
              className=""
              src="/plus-cart.svg"
              width={28}
              height={25} // Округленное значение высоты
              alt="Description of Image"
            />
          </Link>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};