import React, { useState } from "react";
import "./search.css";
import "./expenseInputForm.css";

const Search = ({ options, onSelect }) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setSearch("");
    setIsOpen(false);
  };

  const filteredItems = options.filter((option) =>
    option.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="searchableSelect">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder="Search Item"
      />
      {isOpen && search && (
        <ul className="options">
          {filteredItems.length > 0 ? (
            filteredItems.map((option) => (
              <li key={option.id} onClick={() => handleSelect(option)}>
                {option.item}
              </li>
            ))
          ) : (
            <li>No match found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
