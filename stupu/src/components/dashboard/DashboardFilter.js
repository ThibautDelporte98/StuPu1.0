import React from "react";
import "./DashboardFilter.css";

const DashFilter = ({title }) => {
  return (
    <div className="box-top flex">
    <h2>{title}</h2>
    <div className="filter flex">
      <label htmlFor="filter-options"></label>
      <select id="filter-options">
        <option value="all">Alle</option>
        <option value="popular">Wiskunde</option>
        <option value="recent">Nederlands</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  </div>
  );
};

export default DashFilter;
