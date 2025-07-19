import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import Popular from "../components/Popular";
import Relate from "../components/Relate";
import useHomeStore from "../../Home/stores/homeStores";
import { slugify } from "../../../utils/slugify";

function DetailPage() {
  const { state } = useLocation();
  const { slug } = useParams();
  const { latestNews, getAllNews, labelLatest } = useHomeStore();

  let item = state?.item;
  let label = state?.label || labelLatest;
  let endpoint = state?.endpoint;

  useEffect(() => {
    if (!item && latestNews.length === 0) {
      getAllNews("/terbaru", "Terbaru");
    }
  }, []);

  if (!item && latestNews.length > 0) {
    item = latestNews.find((news) => slugify(news.title) === slug);
  }

  if (!item) return <p>Berita tidak ditemukan.</p>;

  const formattedDate = new Date(item.pubDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="px-4 md:px-0">
      <div className="max-w-7xl mx-auto py-6">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-4">
          <ul className="flex space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:underline">
                Home
              </Link>
            </li>
            <li className="text-gray-500">
              <Link to={endpoint}>{label}</Link>
            </li>
            <li className="text-color-primary">Detail</li>
          </ul>
        </div>

        <div className="md:flex md:gap-4">
          <div className="md:w-9/12">
            {/* Title */}
            <h1 className="text-2xl md:text-5xl font-bold leading-snug mb-4">
              {item.title}
            </h1>

            {/* Metadata */}
            <div className="mt-2 flex flex-wrap gap-4 text-sm font-medium text-slate-600">
              <span className="text-blue-500">{label}</span>
              <span>{formattedDate}</span>
            </div>

            {/* Gambar */}
            <div className="mt-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-lg"
              />
            </div>

            <p className="text-justify text-md leading-relaxed text-slate-700">
              {item.description}
            </p>

            {/* Konten */}
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium iste quasi nulla iusto omnis! Quia veritatis porro
                enim dignissimos vero sit a accusantium est dolorem repellat
                nihil incidunt nemo eius dolor ducimus nisi, iste dicta amet
                ipsam...
              </p>
              <p>
                Ut dolor officia earum sunt obcaecati sint accusamus quisquam
                aut, at numquam laudantium tempora modi sequi amet illum ratione
                non voluptatem? Officiis quibusdam nemo reprehenderit laudantium
                voluptates, animi obcaecati voluptatum a earum consequatur
                iste...
              </p>
            </div>

            <div className="mt-6">
              <Comment />
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <Popular />
          </div>
        </div>

        <div className="mt-8 md:w-8/12">
          <Relate linkCategory={endpoint} label={label} />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
