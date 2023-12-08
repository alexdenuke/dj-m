import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

interface CardShortProps {
  name: string;
  price: number; // или string, если цена передается как текст
  sku: string;
  imageUrl: string;
}

const CardShort: React.FC<CardShortProps> = ({ name, price, sku, imageUrl }) => {
  return (
    <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt={name}
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул: {sku}</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: {price} р</div>
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
