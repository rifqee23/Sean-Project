import React, { useEffect } from "react";
import SubTitle from "../../components/SubTitle";
import { Link, useNavigate } from "react-router-dom";
import useHomeStore from "../../Home/stores/homeStores";
import Card from "../../components/ui/Card";
import { slugify } from "../../../utils/slugify";

function Relate({ linkCategory = "/", label = "Terbaru" }) {
  const navigate = useNavigate();
  const { getAllNews, labelLatest, loading, latestNews } = useHomeStore();
  const shuffledNews = [...latestNews].sort(() => Math.random() - 0.5);

  const limitedNews = shuffledNews.slice(0, 3);

  useEffect(() => {
    getAllNews(linkCategory, label);
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
    <div>
      <div className="flex items-center justify-between">
        <SubTitle>Berita Terkait</SubTitle>
        <Link to={linkCategory} className="btn btn-info">
          Berita Terkait
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {limitedNews.map((item, index) => {
          const slug = slugify(item.title);
          return (
            <div
              className="cursor-pointer group"
              onClick={() =>
                navigate(`/detail/${slug}`, {
                  state: { item, label: labelLatest, endpoint: linkCategory },
                })
              }
              key={item.link}
            >
              <Card
                title={item.title}
                date={formatedDate[index]}
                img={item.thumbnail}
                label={label}
                showLabel={true}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Relate;
