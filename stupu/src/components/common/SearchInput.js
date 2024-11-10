import React from "react";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="search-bar flex">
      <input type="text" placeholder="ZOEK BIJLES..." />
      <button className="custom-button button-search">
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M26 26L19 19"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
