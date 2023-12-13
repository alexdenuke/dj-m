import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
}


const MainCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Функция для загрузки категорий
    const loadCategories = async () => {
      try {
        const response = await fetch('/api/categories/popular'); // Укажите правильный путь к вашему API-эндпоинту
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data); // Обновление состояния categories
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    loadCategories(); // Вызов функции загрузки данных
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен при монтировании компонента

  return (
    <>
      <h2 className="title-normal mt-10">Популярные категории</h2>
      <div className="grid md:grid-cols-5 grid-cols-2 mb-10 ">

      {categories.map(category => (
          <div key={category.id} className="m-2 py-10 px-3 shadow-md flex flex-col items-center justify-center">
            <Image
              src="/knob.png" // Вы можете использовать изображения, связанные с категориями, если они доступны
              width={50}
              height={44}
              alt={category.name}
            />
            <Link key={category.id} href={`/catalog/${encodeURIComponent(category.name)}`} passHref className="text-center block mt-2">
              {category.name}
            </Link>
          </div>
        ))}


      </div>
    </>
  );
};

export default MainCategories;
