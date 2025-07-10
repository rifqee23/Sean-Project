import SubTitle from "../../components/SubTitle";
import NewList from "../../components/NewList";
import { useState } from "react";
import Search from "../../components/ui/Search";

function Recommended() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const isSearching = searchKeyword.trim() !== "";

  return (
    <div className="mt-5">
      <div className="md:flex md:items-center md:justify-between">
        <SubTitle>Rekomendasi Untuk Anda</SubTitle>

        <Search
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Cari disini..."
        />
      </div>
      <NewList
        endpoint={"/olahraga"}
        category={"Olahraga"}
        searchKeyword={searchKeyword}
        isSearching={isSearching}
      />
    </div>
  );
}

export default Recommended;
