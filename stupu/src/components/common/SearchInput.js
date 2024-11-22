import React from "react";
import Button from "./button/Button";
import "./SearchInput.css";
import SearchIcon from "./button/SearchIcon";


const SearchInput = () => {
  return (
    <div className="search-bar flex">
      <input type="text" placeholder="ZOEK BIJLES..." />
      <Button className={"custom-button button-search"} icon={<SearchIcon />} />
    </div>
  );
};

export default SearchInput;
