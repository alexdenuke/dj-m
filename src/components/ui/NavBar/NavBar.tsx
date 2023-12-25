import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { Brand } from "@/types/types";
import {
  useQuery,
} from '@tanstack/react-query'

type LinkProps = {
  margin: string,
}



const NavBar: React.FC<LinkProps> = ({ margin = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Добавляем состояние для отслеживания открыто/закрыто меню

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}



const fetchBrands = async () => {
  const response = await fetch('/api/brands');
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }
  return response.json();
};


const { data, isLoading, isError, error } = useQuery<Brand[]>({
  queryKey: ['brands'],
  queryFn: fetchBrands
});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <nav className={styles.nav}>
      <Link className={`${margin}`} href="/sets" id="link">
        Сэты
      </Link>
      <button
        id="brandsMenuButton"
        className={`${margin}`}
        onClick={toggleMenu}
      >
        Бренды
      </button>
      {isMenuOpen && data && ( // Отображаем меню, если isMenuOpen === true
        <div className="fixed top-0 right-0 w-96 h-full min-h-full bg-slate-500">
              {data.map(brand => (
      <div key={brand.id}>{brand.name}</div>
    ))}
        </div>
      )}
      <Link className={`${margin}`} href="/service" id="link">
        Сервис
      </Link>
      <Link className={`${margin}`} href="/contacts" id="link">
        Контакты
      </Link>
    </nav>
  );
};

export default NavBar;
