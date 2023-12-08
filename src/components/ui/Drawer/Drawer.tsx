import React, { useState, useEffect } from "react";
import styles from "./Drawer.module.scss";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
}

const Drawer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]); // Состояние для хранения данных категорий

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories"); // URL вашего API endpoint
        if (!response.ok) {
          throw new Error("Сетевой запрос за данными категорий не удался");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchCategories();
  }, []); // Пустой массив зависимостей гарантирует, что эффект запустится один раз после монтирования компонента

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="order-[-1] md:order-none">
      <button
        onClick={toggleMenu}
        className="py-2 px-3 bg-gray-700 hover:bg-gray-900 max-w-max text-white font-bold rounded ml-5"
      >
        Каталог
      </button>
      <div
        className={`fixed  top-0 left-0 min-h-full w-60 md:w-80 bg-base-200 p-5 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div>
          {categories.map((category) => (
            <Link key={category.id} href={`/catalog/${encodeURIComponent(category.name)}`} passHref>
              <div onClick={closeMenu} className="block cursor-pointer">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Drawer;
