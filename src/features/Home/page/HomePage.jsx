import Popular from "../components/Popular";
import Carrousel from "../components/Carrousel";
import Recommended from "../components/Recommended";
import BannerAds from "../components/BannerAds";

function HomePage() {
  return (
    <div className="md:max-w-7xl md:mx-auto">
      <Carrousel />
      <Popular />
      <Recommended />
      <BannerAds />
    </div>
  );
}

export default HomePage;
