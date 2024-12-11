import React from "react";
import "./Filter.css";

const DashFilter = ({ id, options = [], onFilterChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onFilterChange(selectedValue); // Pass the selected value to the parent component
  };

  return (
    <div className="flex justify-content-end">
      <div className="filter flex">
        <label className="flex" htmlFor={id}>
          Filter:
          <select name="filter" id={id} onChange={handleChange}>
            {options.length > 0 ? (
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            ) : (
              <option value="">n.v.t</option>
            )}
          </select>
        </label>
      </div>
    </div>
  );
};

export default DashFilter;
