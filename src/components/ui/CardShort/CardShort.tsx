import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const CardShort = () => {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
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

      <Link className="text-center my-5 block" href="/productCard" id="link">
        Описание
      </Link>
      <div className="flex justify-between mb-5">
        <p>Артикул</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена 100 р</div>
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
  );
};

export default CardShort;
