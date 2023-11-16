import React from "react";
import styles from "./Drawer.module.scss";
import Link from "next/link";

interface DrawerProps {
  margin?: string; // Пропс для задания отступов, например "mt-4" или "mb-4"
}

const Drawer: React.FC<DrawerProps> = ({ margin = "" }) => {
  const handleCloseClick = () => {
    // Находим чекбокс по ID и изменяем его состояние
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  return (
    <div
      className={`drawer w-auto order-[-1] md:order-none tracking-widest md:block ${margin}`}
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <div className="bg-gray-700 hover:bg-gray-900 text-white hidden  font-bold py-2 px-4 rounded md:inline-block">
            Каталог
          </div>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <button
            className="btn btn-circle btn-outline"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
            <li>
              <Link className="" href="/" id="link">
                Каталог
              </Link>
            </li>
            <li>
              <Link className="" href="/" id="link">
                Бренды
              </Link>
            </li>
            <li>
              <Link className="" href="/" id="link">
                Сеты
              </Link>
            </li>
            <li>
              <Link className="" href="/" id="link">
                Сервис
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
