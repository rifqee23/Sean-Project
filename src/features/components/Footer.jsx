import React from "react";
import logo_footer from "../../assets/Logo Footer.png";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import Input from "./ui/Input";
import { Link } from "react-router-dom";

function Footer() {
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
    <footer className="bg-color-secondary w-full text-white h-auto md:fixed md:bottom-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-3">
        {/* Logo & Sosmed */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logo_footer} className="w-32" alt="Logo Berita Kini" />
          <p className="text-slate-200 text-sm">
            © 2023 Berita Kini. All Rights Reserved.
          </p>
          <p className="text-lg font-semibold">Ikuti Kami</p>
          <div className="flex gap-2">
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutubeSquare size={28} aria-label="YouTube" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare size={28} aria-label="Instagram" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare size={28} aria-label="Facebook" />
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div className="grid grid-cols-2 gap-8 text-sm justify-items-center">
          <div className="text-left place-self-end md:place-self-start">
            <h2 className="font-semibold mb-2">Telusuri</h2>
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="hover:underline hover:text-color-primary"
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <h2 className="font-semibold mb-2">Bantuan</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-color-primary"
                >
                  Kontak Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-color-primary"
                >
                  Laporan Pembajakan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-color-primary"
                >
                  Kebijakan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Berlangganan */}
        <div className="flex flex-col gap-3">
          <h2 className="text-center md:text-left text-md font-semibold">
            Berlangganan Berita Terbaru
          </h2>
          <div className="flex justify-center md:justify-start">
            <Input />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
