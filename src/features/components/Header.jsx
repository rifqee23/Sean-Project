import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      title: "Beranda",
      link: "/",
    },
    {
      title: "Terbaru",
      link: "/terbaru",
    },
    {
      title: "Hiburan",
      link: "/hiburan",
    },
    {
      title: "Gaya Hidup",
      link: "/gayaHidup",
    },
    {
      title: "Olahraga",
      link: "/olahraga",
    },
    {
      title: "Nasional",
      link: "/nasional",
    },
    {
      title: "Internasional",
      link: "/internasional",
    },
  ];

  return (
    <header>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 font-medium text-gray-700">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  location.pathname === item.link
                    ? "text-blue-600 font-semibold"
                    : "hover:text-gray-500"
                }`}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>

        {isOpen && (
          <ul className="lg:hidden px-4 pb-4 space-y-3 bg-white font-medium text-gray-700">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  location.pathname === item.link
                    ? "text-blue-600 font-semibold"
                    : "hover:text-gray-500"
                }`}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
