import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";

function Card({
  title = "Card Title",
  children,
  img = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  alt = "Shoes",
  date = "2025-07-07T14:02:00.000Z2025-07-07T14:02:00.000Z",
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <p className="flex gap-2 items-center">
          <BsCalendarEvent color="gray" />
          <span className="text-sm font-medium">{date}</span>
        </p>
        <p className="text-color-primary font-semibold flex items-center gap-x-2">
          <a href="">Baca Selengkapnya</a>
          <i>
            <BsArrowUpRight />
          </i>
        </p>
      </div>
    </div>
  );
}

export default Card;
