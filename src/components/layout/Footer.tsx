// components/Footer.tsx
import Image from "next/image";
import BottomNavigation from "../ui/BottomNavigation/BottomNavigation";

const Footer: React.FC = () => {
  return (
    <div className="">
      <BottomNavigation/>
      <div className="containerUser">
      <footer className="p-8 footer bg-base-200 text-base-content ">
      <aside>
        <Image
          src="/logo.svg"
          alt="Description of Image"
          className="w-[50px] h-auto"
          width={50}
          height={44}
        />
        <p>
          dj-m
          <br />
          Online-shop
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      
    </footer>
      </div>
      
    </div>
    
  );
};

export default Footer;
