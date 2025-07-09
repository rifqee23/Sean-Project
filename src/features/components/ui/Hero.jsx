import React from "react";
import { BsCalendarEvent, BsArrowUpRight } from "react-icons/bs";

function Hero({
  title = "Card Title",
  children,
  img = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  alt = "Shoes",
  date = "2025-07-07T14:02:00.000Z",
  onClick = () => {},
}) {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="w-full max-w-lg rounded-lg shadow-2xl"
          alt={alt}
        />

        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{children}</p>

          <p className="flex gap-2 items-center">
            <BsCalendarEvent color="gray" />
            <span className="text-sm font-medium">
              {new Date(date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </p>

          <button
            onClick={onClick}
            className="text-color-primary font-semibold  mt-2 cursor-pointer"
          >
            <p className="flex items-center hover:underline">
              Baca Selengkapnya
              <BsArrowUpRight />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
