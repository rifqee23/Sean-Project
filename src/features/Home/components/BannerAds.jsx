import React from "react";
import imgRight from "../../../assets/Right.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function BannerAds() {
  return (
    <div className="bg-teal-500 mt-10 max-w-5xl mx-auto text-white rounded-2xl">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="px-6 py-2 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-snug">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </h2>
              <p className="mt-2 text-white/90">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </p>
            </div>
            <div className="">
              <img
                src={imgRight}
                alt="Musium Brawijaya"
                className="object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-6 py-2 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-snug">
                Jelajahi Warisan Kota Malang dengan Serunya City Tour!
              </h2>
              <p className="mt-2 text-white/90">
                Jelajahi Warisan Kota Malang dengan Serunya City Tour!
              </p>
            </div>
            <div className="">
              <img
                src={imgRight}
                alt="Musium Brawijaya"
                className="object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-6 py-2 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-snug">
                Nikmati pengalaman seru dan penuh wawasan saat menjelajah
                destinasi ikonik Malang bersama tur edukatif yang tak
                terlupakan!
              </h2>
              <p className="mt-2 text-white/90">
                Nikmati pengalaman seru dan penuh wawasan saat menjelajah
                destinasi ikonik Malang bersama tur edukatif yang tak
                terlupakan!
              </p>
            </div>
            <div className="">
              <img
                src={imgRight}
                alt="Musium Brawijaya"
                className="object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerAds;
