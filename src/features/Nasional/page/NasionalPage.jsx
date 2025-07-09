import React from "react";
import NewList from "../../components/NewList";

function NasionalPage() {
  return (
    <div>
      <NewList endpoint={"/nasional"} category={"Nasional"} />
    </div>
  );
}

export default NasionalPage;
