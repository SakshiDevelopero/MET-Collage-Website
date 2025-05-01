
import { ReactNode } from "react";
import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full z-50">
        <TopNavbar />
        <MainNavbar />
      </div>
      <main className="flex-grow pt-[112px]"> {/* Adjust padding-top based on the height of your fixed navbars */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
