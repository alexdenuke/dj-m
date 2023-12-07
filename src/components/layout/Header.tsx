// components/Header.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "../ui/SearchBar/SearchBar";
import Drawer from "../ui/Drawer/Drawer";
import Link from "next/link";
import NavBar from "../ui/NavBar/NavBar";
import { GetServerSideProps } from 'next';
import pool from "@/lib/db";

const Header: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Устанавливаем состояние showNavBar в false, когда пользователь прокрутил страницу вниз
      const screenWidth = window.innerWidth;
      const scrollY = window.scrollY;
          // Проверяем, больше ли ширина экрана 768 пикселей
    if (screenWidth > 768) {
      // Меняем состояние showNavBar только для экранов больше 768 пикселей
      setShowNavBar(scrollY < 50); // 50 - это количество пикселей, вы можете настроить это значение
    }
    };

    // Подписываемся на событие scroll
    window.addEventListener("scroll", onScroll);

    // Отписываемся от события при размонтировании компонента
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="md:fixed bg-white shadow-md top-0 z-50 w-full md:mb-20">
      <div className="containerUser">
        <div className="flex items-center  justify-between py-6 ">
          <Link className="shrink-0" href="/" id="link">
            <Image
              className=""
              src="/logo.svg"
              width={50}
              height={45} // Округленное значение высоты
              alt="Description of Image"
            />
          </Link>

          <Drawer/>

          <SearchBar />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-12 hidden md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        {showNavBar && (
          <div className="md:flex items-center ">
            <NavBar margin="ml-5" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
