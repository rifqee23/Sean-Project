import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-4 py-6 md:pb-82">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
