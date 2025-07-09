import React from "react";
import NewList from "../../components/NewList";

function GayaHidupPage() {
  return (
    <div>
      <NewList endpoint={"/gayaHidup"} category={"Gaya Hidup"} />
    </div>
  );
}

export default GayaHidupPage;
