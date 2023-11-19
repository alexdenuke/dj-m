import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

interface LinkProps {
  margin?: string; // Пропс для задания отступов, например "mt-4" или "mb-4"
}

const NavBar: React.FC<LinkProps> = ({ margin = "" }) => {
  return (
    <nav className= {styles.nav}>
      <Link className={`${margin}`} href="/sets" id="link">
        Сэты
      </Link>
      <Link className={`${margin}`} href="/brends" id="link">
        Брэнды
      </Link>
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
