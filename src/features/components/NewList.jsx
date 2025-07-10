import React, { useEffect, useRef, useState } from "react";
import useHomeStore from "../Home/stores/homeStores";
import { useSearchParams, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./ui/Card";
import { slugify } from "../../utils/slugify";
import useIsDesktop from "../../hooks/useIsDesktop";

function NewList({
  endpoint,
  category,
  searchKeyword = "",
  isSearching = false,
}) {
  const navigate = useNavigate();
  const listRef = useRef(null);

  const {
    getNewsPagination,
    paginatedNews,
    totalPages,
    setPage,
    loading,
    totalNews,
    labelPaginated,
  } = useHomeStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page")) || 1;

  const hasInteracted = useRef(false);
  const isDesktop = useIsDesktop();

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formatedDate = paginatedNews.map((item) =>
    new Date(item.pubDate).toLocaleDateString("id-ID", options)
  );

  useEffect(() => {
    const fetchAndSetPage = async () => {
      await getNewsPagination(endpoint, category);
      setPage(pageParam);

      if (hasInteracted.current) {
        listRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    fetchAndSetPage();
  }, [endpoint, category, pageParam]);

  const handlePageChange = ({ selected }) => {
    const page = selected + 1;
    hasInteracted.current = true;
    setSearchParams({ page });
  };

  const filteredNews = paginatedNews.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex items-center justify-center pt-24">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  return (
    <div>
      <div className="space-y-2">
        <div ref={listRef}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {filteredNews.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              <p className="text-lg font-medium">
                Tidak ada berita yang ditemukan.
              </p>
              {isSearching && (
                <p className="text-sm mt-2">Coba gunakan kata kunci lain.</p>
              )}
            </div>
          ) : (
            filteredNews.map((item, index) => {
              const slug = slugify(item.title);
              return (
                <div
                  key={item.link}
                  className="cursor-pointer group"
                  onClick={() =>
                    navigate(`/detail/${slug}`, {
                      state: {
                        item,
                        label: labelPaginated,
                        endpoint: endpoint,
                      },
                    })
                  }
                >
                  <Card
                    title={item.title}
                    img={item.thumbnail}
                    date={formatedDate[index]}
                    showLabel={true}
                    label={labelPaginated}
                  >
                    {item.description}
                  </Card>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* PAGINATION */}

      {!isSearching && totalPages > 0 && (
        <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left md:pt-4">
            Showing <span className="font-medium">{pageParam}</span> to{" "}
            <span className="font-medium">{totalPages}</span> of{" "}
            <span className="font-medium">{totalNews}</span> results
          </p>

          {totalPages > 0 && (
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <span className="flex items-center gap-1">
                  <span className="font-medium">Next</span>
                  <FaChevronRight className="text-sm" />
                </span>
              }
              previousLabel={
                <span className="flex items-center gap-1">
                  <FaChevronLeft className="text-sm" />
                  <span className="font-medium">Prev</span>
                </span>
              }
              onPageChange={handlePageChange}
              pageRangeDisplayed={isDesktop ? 2 : 0}
              marginPagesDisplayed={isDesktop ? 1 : 0}
              pageCount={totalPages}
              forcePage={pageParam - 1}
              renderOnZeroPageCount={null}
              containerClassName="flex gap-2 flex-wrap justify-center mt-6"
              pageClassName="border px-3 py-1 text-sm rounded transition-transform hover:-translate-y-1 cursor-pointer select-none"
              activeClassName="bg-blue-600 text-white font-bold px-3 py-1 rounded hover:bg-blue-600 transition"
              previousClassName={
                pageParam > 1
                  ? "border px-2 py-1 rounded flex items-center transition-transform hover:-translate-y-1 cursor-pointer"
                  : "hidden"
              }
              nextClassName={
                pageParam < totalPages
                  ? "border px-2 py-1 rounded flex items-center transition-transform hover:-translate-y-1 cursor-pointer"
                  : "hidden"
              }
              breakClassName="px-3 py-1 text-gray-500"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default NewList;
