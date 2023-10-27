// components/Header.tsx
import Image from "next/image";
import SearchBar from "../ui/SearchBar";
import Drawer from "../ui/Drawer/Drawer";
import Link from "next/link";
import NavBar from "../ui/NavBar/NavBar";
import Hamburger from "../ui/Hamburger/Hamburger"

const Header: React.FC = () => {
  return (
    <header className="">
      <div className="containerUser  ">

      
      <div className=" flex items-center justify-between py-5">
    <Hamburger/>
        <Image
        className=""
          src="/logo.svg"
          width={50}
          height={44}
          alt="Description of Image"
        />
        <Drawer margin="ml-10" />

        <SearchBar />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>

      <div className="flex items-center">
        <NavBar margin="ml-5" />
      </div>
      </div>
    </header>
  );
};

export default Header;
