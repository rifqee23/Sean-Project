import React, { useEffect } from "react";
import Card from "../../components/ui/Card";
import useHomeStore from "../stores/homeStores";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../../utils/slugify";
import SubTitle from "../../components/SubTitle";

function Popular() {
  const navigate = useNavigate();
  const { latestNews, getAllNews, loading, labelLatest } = useHomeStore();
  const limitedNews = latestNews.slice(0, 3);
  const route = "/terbaru";

  useEffect(() => {
    getAllNews(route, "Terbaru");
  }, []);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formatedDate = limitedNews.map((item) =>
    new Date(item.pubDate).toLocaleDateString("id-ID", options)
  );

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  return (
    <div className="mt-10">
      <SubTitle>Berita Terpopuler</SubTitle>
      <div className="flex flex-col items-center md:flex-row md:gap-4 md:items-stretch md:justify-center">
        {limitedNews.map((item, index) => {
          const slug = slugify(item.title);
          return (
            <div
              key={item.link}
              className="relative py-2 cursor-pointer"
              onClick={() =>
                navigate(`/detail/${slug}`, {
                  state: { item, label: labelLatest, endpoint: route },
                })
              }
            >
              <span className="hidden bg-neutral text-white rounded-full absolute top-0 left-1 w-6 h-6 z-50 md:flex items-center justify-center">
                {index + 1}
              </span>

              <Card
                title={item.title}
                img={item.thumbnail}
                date={formatedDate[index]}
                showLabel={true}
                label={labelLatest}
              >
                {item.description}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
