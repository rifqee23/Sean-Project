import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import useHomeStore from "../stores/homeStores";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function Carrousel() {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const { latestNews, getAllNews, loading, labelLatest } = useHomeStore();

  const limitedNews = latestNews.slice(0, 5);
  const total = limitedNews.length;
  const route = "/terbaru";

  useEffect(() => {
    getAllNews(route, "Terbaru");
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrent(swiper.realIndex + 1);
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current?.slidePrev();
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current?.slideNext();
  };

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        className=""
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {limitedNews.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Banner data={[item]} label={labelLatest} endpoint={route} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-4 text-center text-lg font-semibold flex items-center justify-center">
        {current > 1 && (
          <button onClick={goPrev} className="mr-2">
            <FaAngleLeft color="gray" />
          </button>
        )}
        <p className="text-gray-600">
          {total > 0 ? `${current} dari ${total}` : "0 dari 0"}
        </p>
        {current < total && (
          <button onClick={goNext} className="ml-2">
            <FaAngleRight color="gray" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carrousel;
