import React, { useState } from "react";
import NewList from "../../components/NewList";
import SubTitle from "../../components/SubTitle";
import Search from "../../components/ui/Search";

function HiburanPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const isSearching = searchKeyword.trim() !== "";
  return (
    <div className="mb-6">
      <div className="md:flex md:items-center md:justify-between">
        <SubTitle>Hiburan</SubTitle>

        <Search
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Cari disini..."
        />
      </div>
      <NewList
        endpoint={"/hiburan"}
        category={"Hiburan"}
        isSearching={isSearching}
        searchKeyword={searchKeyword}
      />
    </div>
  );
}

export default HiburanPage;
