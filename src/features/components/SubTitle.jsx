import React from "react";

function SubTitle({ children }) {
  return (
    <div className="flex gap-2 mb-4 ">
      <span className="border-l-4 border-color-primary rounded-full"></span>
      <h2 className="text-xl font-semibold">{children}</h2>
    </div>
  );
}

export default SubTitle;
