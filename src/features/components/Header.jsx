import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png";
import logo2 from "../../assets/Logo Footer.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathLocation = location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <nav
        className={`shadow-sm fixed w-full z-50 ${
          isScrolled ? "bg-color-primary" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            {isScrolled ? (
              <img src={logo2} alt="Logo" className="w-32" />
            ) : (
              <img src={logo} alt="Logo" className="w-32" />
            )}
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex space-x-6 font-medium ${
              isScrolled ? "text-white" : " text-gray-700"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  location.pathname === item.link
                    ? `font-semibold ${
                        isScrolled ? "text-gray-700" : "text-blue-600"
                      }`
                    : `${
                        isScrolled
                          ? "hover:text-slate-200"
                          : "hover:text-gray-500"
                      }`
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
                  pathLocation === item.link
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
