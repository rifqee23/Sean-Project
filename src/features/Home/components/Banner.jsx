import React from "react";
import Card from "../../components/ui/Card";
import Hero from "../../components/ui/Hero";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../../utils/slugify";

function Banner({ data, label, endpoint }) {
  const navigate = useNavigate();
  const isoDate = data.map((item) => item.pubDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formatedDate = new Date(isoDate).toLocaleDateString("id-ID", options);
  return (
    <div>
      <div className="md:max-w-7xl md:mx-auto md:px-4">
        <h2 className="text-xl font-semibold text-center mb-2 md:text-start md:text-md">
          Headline
        </h2>
      </div>
      <div className="flex justify-center mt-2">
        {data.map((item) => {
          const slug = slugify(item.title);
          return (
            <div key={item.link}>
              <div className="md:hidden">
                <Card
                  title={item.title}
                  img={item.thumbnail}
                  alt={item.title}
                  date={formatedDate}
                  showReadMore={true}
                  onClick={() =>
                    navigate(`/detail/${slug}`, {
                      state: { item, label: label, endpoint: endpoint },
                    })
                  }
                >
                  {item.description}
                </Card>
              </div>
              <div className="hidden md:block">
                <Hero
                  title={item.title}
                  img={item.thumbnail}
                  alt={item.title}
                  date={formatedDate}
                  onClick={() =>
                    navigate(`/detail/${slug}`, {
                      state: { item, label: label },
                    })
                  }
                >
                  {item.description}
                </Hero>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
