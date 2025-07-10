import React, { useEffect } from "react";
import SubTitle from "../../components/SubTitle";
import Card from "../../components/ui/Card";
import CardSide from "../../components/ui/CardSide";
import useHomeStore from "../../Home/stores/homeStores";

function Popular() {
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
    <div>
      <SubTitle>Populer</SubTitle>
      <div>
        {limitedNews.map((item, index) => (
          <div key={item.link}>
            <div className="flex flex-col items-center md:hidden">
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
            <div className="hidden md:block">
              <CardSide
                title={item.title}
                label={labelLatest}
                date={formatedDate[index]}
                img={item.thumbnail}
                index={index + 1}
              >
                {item.description}
              </CardSide>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
