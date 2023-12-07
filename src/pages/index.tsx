import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Swiper from "../components/ui/Swiper/Swiper";
import Swiper2 from "../components/ui/Swiper/Swiper2/Swiper2";
import MainCategories from "../components/ui/MainCategories/Maincategories";
import SwiperLogo from "@/components/ui/Swiper/Swiper-logo";
import SearchBar from "@/components/ui/SearchBar/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Swiper/> */}
      <div className="containerUser">
        
      </div>
      <div className="bg-[url('/main-back-ground.jpg')] bg-no-repeat bg-cover h-auto py-10 mt-5 ">
        <div className="containerUser h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white title-h1 text-center ">
              Магазин запчастей для диджейского оборудования
            </div>
            <div className="text-white title-normal text-center">
              Лучшие и отборные запчасти
            </div>
            <form className="flex justify-center mt-4 text-center  w-full">
              <input
                type="text"
                className="form-input rounded-l border-2 border-r-0 px-4 py-2 max-w-md min-w-0 grow"
                placeholder="Поиск по всему сайту"
                // Событие onChange для обработки ввода
              />
              <button
                type="submit"
                className="rounded-r bg-gray-700 text-white px-4 py-2 border-2 border-gray-700 hover:border-gray-900 hover:bg-gray-900"
              >
                Поиск
              </button>
            </form>
          </div>
        </div>
      </div>
      <h2 className="title-normal containerUser mt-10">Поиск по брендам</h2>
      <div className="py-10 border-2">
      <div className="containerUser">
      <SwiperLogo />
      </div>
      
      </div>

      
      {/* <div className="bg-gray-200 py-5 select-none">
        <div className="containerUser ">

        </div>
      </div> */}
      <div className="containerUser">
        
        <MainCategories />
      </div>

      <div className="containerUser">
        <h2 className=" title-normal mt-10">Популярные товары</h2>
        <Swiper2 />
      </div>

      <div className="containerUser">
        <div className="flex gap-5 flex-wrap sm:flex-nowrap">
          <div className="flex flex-col shadow-md p-8 basis-full sm:basis-6/12">
            <h2 className="text-2xl font-semibold  mb-2">Выгодные сеты</h2>
            <h3 className=" mb-2">
              Выберите популярные наборы товаров по выгодной цене
            </h3>
            {/* <button className="bg-gray-700 hover:bg-gray-900 text-white max-w-max border-gray-600 border-2 font-bold py-3 px-4 rounded ml-auto">
              Подробнее
            </button> */}
            <Link
              className="bg-gray-700 hover:bg-gray-900 text-white max-w-max border-gray-600 border-2 font-bold py-3 px-4 rounded ml-auto"
              href="/sets"
              id="link"
            >
              Подробнее
            </Link>
          </div>

          <div className="flex flex-col shadow-md p-8 basis-full sm:basis-6/12">
            <h2 className="text-2xl font-semibold  mb-2">Надёжный сервис</h2>
            <h3 className=" mb-2">
              Принесите ваше сломанное оборудование и мы оживим его
            </h3>
            {/* <button className="bg-gray-700 hover:bg-gray-900 text-white max-w-max border-gray-600 border-2 font-bold py-3 px-4 rounded ml-auto">
              Подробнее
            </button> */}
            <Link
              className="bg-gray-700 hover:bg-gray-900 text-white max-w-max border-gray-600 border-2 font-bold py-3 px-4 rounded ml-auto"
              href="/service"
              id="link"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500 to-blue-500 ">
        <div className="containerUser flex flex-col md:flex-row items-center justify-center  py-10 my-10">
          <p className=" text-white text-xl font-semibold mb-3 md:m-0 md:mr-5">
            Подпишитесь на рассылку!
          </p>
          <form className="mb-3 md:m-0 md:mr-5" action="">
            <input
              className="py-3 px-4 "
              type="text"
              placeholder="Введите email"
            />
          </form>
          <button className="bg-cyan-50  text-black py-3 px-4 rounded font-semibold">
            Отправить
          </button>
        </div>
      </div>
    </>
  );
}
