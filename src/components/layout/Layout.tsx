import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
      className="md:mt-48"
      ></div>
      <Header />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
