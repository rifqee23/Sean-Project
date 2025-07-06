import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Beranda",
    "Terbaru",
    "Hiburan",
    "Gaya Hidup",
    "Olahraga",
    "Nasional",
    "Internasional",
  ];

  return (
    <header>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-3 bg-white font-medium text-gray-700">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-color-primary cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
