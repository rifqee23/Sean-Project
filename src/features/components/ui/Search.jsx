import React from "react";

function Search({
  value = "",
  onChange = () => {},
  placeholder = "Cari berita...",
}) {
  return (
    <div>
      <label className="input">
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </label>
    </div>
  );
}

export default Search;
