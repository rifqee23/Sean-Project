import Popular from "../components/Popular";
import Carrousel from "../components/Carrousel";
import Recommended from "../components/Recommended";

function HomePage() {
  return (
    <div className="md:max-w-7xl md:mx-auto">
      <Carrousel />
      <Popular />
      <Recommended />
    </div>
  );
}

export default HomePage;
