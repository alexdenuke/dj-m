import Image from "next/image";
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
      <div className="bg-[url('/main-back-ground.jpg')] bg-no-repeat bg-cover h-auto py-14 ">
        <div className="containerUser h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white title-h1 text-center ">
              Магазин запчастей для диджейского оборудования
            </div>
            <div className="text-white title-normal text-center">
          Лучшие и отборные запчасти
            </div>
              <form className="flex justify-center mt-8 text-center pb-14">
                <input
                  type="text"
                  className="form-input rounded-l border-2 border-r-0 px-4 py-2"
                  placeholder="Поиск..."
                  // Событие onChange для обработки ввода
                />
                <button
                  type="submit"
                  className="rounded-r bg-gray-500 text-white px-4 py-2 border-2 border-gray-500 hover:bg-gray-600"
                >
                  Поиск
                </button>
              </form>
          </div>
          <SwiperLogo />
        </div>
        
      </div>

      <div className="containerUser">
        <h2 className="title-normal mt-10 ">Брэнды</h2>
        
        
        <MainCategories />
        <h2 className=" title-normal mt-10">Популярные товары</h2>
        <Swiper2 />
      </div>
    </>
  );
}
