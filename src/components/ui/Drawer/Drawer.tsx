import React, { useState, useEffect } from "react";
import styles from "./Drawer.module.scss";
import Link from "next/link";

interface Category {
  id: number; // Используйте правильные типы данных и названия полей в соответствии с вашей базой данных
  name: string;
  // Другие поля, если они есть
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
            <Link onClick={closeMenu} key={category.id} className="block" href={`/catalog/${category.name}`} id="link">{category.name}</Link>// Пример отображения данных. Используйте правильные поля
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

// import React from "react";
// import styles from "./Drawer.module.scss";
// import Link from "next/link";

// interface DrawerProps {
//   margin?: string; // Пропс для задания отступов, например "mt-4" или "mb-4"
// }

// const Drawer: React.FC<DrawerProps> = ({ margin = "" }) => {
//   const handleCloseClick = () => {
//     // Находим чекбокс по ID и изменяем его состояние
//     const drawerCheckbox = document.getElementById(
//       "my-drawer"
//     ) as HTMLInputElement;
//     if (drawerCheckbox) {
//       drawerCheckbox.checked = false;
//     }
//   };
//   return (
//     <div
//       className={`drawer w-auto order-[-1] md:order-none tracking-widest md:block ${margin}`}
//     >
//       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content ">
//         <label htmlFor="my-drawer" className="cursor-pointer">
//           <div className="bg-gray-700 hover:bg-gray-900 text-white hidden  font-bold py-2 px-4 rounded md:inline-block">
//             Каталог
//           </div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 md:hidden"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </label>
//       </div>
//       <div className="drawer-side z-10">
//         <label
//           htmlFor="my-drawer"
//           aria-label="close sidebar"
//           className="drawer-overlay "
//         ></label>
//         <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//           <button
//             className="btn btn-circle btn-outline"
//             onClick={handleCloseClick}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>

//           <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
//             <li>
//               <Link className="" href="/" id="link">
//                 Каталог!!!
//               </Link>
//             </li>
//             <li>
//               <Link className="md:hidden" href="/brends" id="link">
//                 Бренды
//               </Link>
//             </li>
//             <li>
//               <Link className="md:hidden" href="/sets" id="link">
//                 Сеты
//               </Link>
//             </li>
//             <li>
//               <Link className="md:hidden" href="/service" id="link">
//                 Сервис
//               </Link>
//             </li>
//             <li>
//               <Link className="md:hidden" href="/contacts" id="link">
//                 Контакты
//               </Link>
//             </li>
//           </ul>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Drawer;
