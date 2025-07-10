import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <main className={`flex-grow px-4 pb-6 pt-24 ${isHome ? "md:pb-82" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
