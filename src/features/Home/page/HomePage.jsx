import React from "react";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Carrousel from "../components/Carrousel";

function HomePage() {
  return (
    <div>
      <Carrousel />
      <Popular />
    </div>
  );
}

export default HomePage;
