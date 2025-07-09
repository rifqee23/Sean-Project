import React from "react";
import NewList from "../../components/NewList";

function OlahragaPage() {
  return (
    <div>
      <NewList endpoint={"/olahraga"} category={"Olahraga"} />
    </div>
  );
}

export default OlahragaPage;
