import React from "react";
import NewList from "../../components/NewList";

function InternasionalPage() {
  return (
    <div>
      <NewList endpoint={"/internasional"} category={"Internasional"} />
    </div>
  );
}

export default InternasionalPage;
