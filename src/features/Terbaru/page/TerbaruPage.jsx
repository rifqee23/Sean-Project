import React from "react";
import NewList from "../../components/NewList";

function TerbaruPage() {
  return (
    <div>
      <NewList endpoint={"/terbaru"} category={"Terbaru"} />
    </div>
  );
}

export default TerbaruPage;
