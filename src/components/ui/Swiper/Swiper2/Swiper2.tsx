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

      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
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
    </div>
      </SwiperSlide>


    </Swiper>
  );
};
