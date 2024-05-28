import React from "react";
import "./Filter.css";

const Filter = ({ options, onFilter }) => {
  const uniqueDates = [...new Set(options.map((option) => option.date))];

  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className="filter">
      <label>Filter by date: </label>
      <select onChange={handleFilterChange}>
        <option value="">Select Date</option>
        {uniqueDates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
