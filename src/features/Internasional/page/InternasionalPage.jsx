import React, { useState } from "react";
import NewList from "../../components/NewList";
import SubTitle from "../../components/SubTitle";
import Search from "../../components/ui/Search";

function InternasionalPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const isSearching = searchKeyword.trim() !== "";
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <SubTitle>Internasional</SubTitle>

        <Search
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Cari disini..."
        />
      </div>
      <NewList
        endpoint={"/internasional"}
        category={"Internasional"}
        isSearching={isSearching}
        searchKeyword={searchKeyword}
      />
    </div>
  );
}

export default InternasionalPage;
