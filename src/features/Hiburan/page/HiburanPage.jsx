import React from "react";
import NewList from "../../components/NewList";

function HiburanPage() {
  return (
    <div>
      <NewList endpoint={"/hiburan"} category={"Hiburan"} />
    </div>
  );
}

export default HiburanPage;
