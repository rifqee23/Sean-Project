import React from "react";
import { BsCalendarEvent } from "react-icons/bs";

function CardSide({
  title = "Card Title",
  children,
  label = "Olahraga",
  date = "2025-07-07T14:02:00.000Z",
  img = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  index = 1,
}) {
  return (
    <div className="relative flex bg-base-100 shadow-sm h-full max-w-md w-full">
      {/* Badge Nomor */}
      <span className="hidden md:flex items-center justify-center absolute top-0 left-1 w-6 h-6 rounded-full bg-neutral text-white text-xs font-semibold z-10">
        {index}
      </span>

      {/* Gambar */}
      <figure className="pl-3 py-3 h-full">
        <img
          src={img}
          alt="thumbnail"
          className="h-28 w-28 object-cover rounded-xl"
        />
      </figure>

      {/* Konten */}
      <div className="card-body w-3/4 px-3 py-3 flex flex-col justify-between">
        <div className="mb-2">
          <h2 className="text-sm font-semibold leading-snug line-clamp-3 group-hover:underline transition-all duration-200">
            {title}
          </h2>
          <p>{children}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
          {<span className="text-color-primary font-medium">{label}</span>}
          <span className="flex items-center gap-1">
            <BsCalendarEvent className="text-gray-400" size={12} />
            <span>{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardSide;
