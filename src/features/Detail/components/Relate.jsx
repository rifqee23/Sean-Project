import React, { useEffect } from "react";
import SubTitle from "../../components/SubTitle";
import { Link } from "react-router-dom";
import useHomeStore from "../../Home/stores/homeStores";
import Card from "../../components/ui/Card";

function Relate({ linkCategory = "/", label = "Terbaru" }) {
  const { getAllNews, labelLatest, loading, latestNews } = useHomeStore();

  const limitedNews = latestNews.slice(0, 3);

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
        {limitedNews.map((item, index) => (
          <div>
            <Card
              key={item.link}
              title={item.title}
              date={formatedDate[index]}
              img={item.thumbnail}
              label={label}
              showLabel={true}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Relate;
