import React, { useState, useEffect } from "react";
import "./App.css";
import TableUI from "./components/tableUI";
import Search from "./components/search";
import ExpenseInputForm from "./components/ExpenseInputForm";
import Filter from "./components/Filter";
import { v4 } from "uuid";

function App() {
  const [expense, setExpense] = useState([]);
  const [filteredExpense, setFilteredExpense] = useState([]);
  const [searchedExpense, setSearchExpense] = useState([]);
  const [selectedTrigger, setSelectedTrigger] = useState("");

  // Retrieve data
  useEffect(() => {
    const storeData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const items = JSON.parse(localStorage.getItem(key));
      storeData.push({ id: key, ...items });
    }
    setExpense(storeData);
    setFilteredExpense(storeData);
    setSearchExpense(storeData);
  }, []);

  // Store data
  const handleDataAdd = (newExpense) => {
    const id = v4();
    const expenseWithId = { id, ...newExpense };
    const updatedExpense = [...expense, expenseWithId];
    setExpense(updatedExpense);
    setFilteredExpense(updatedExpense);
    setSearchExpense(updatedExpense);
    localStorage.setItem(id, JSON.stringify(newExpense));
  };

  const handleDataDelete = (id) => {
    const itemsAfterDelete = expense.filter((items) => items.id !== id);
    setExpense(itemsAfterDelete);
    setFilteredExpense(itemsAfterDelete);
    setSearchExpense(itemsAfterDelete);
    localStorage.removeItem(id);
  };

  const handleSelect = (item) => {
    setSearchExpense([item]);
    setSelectedTrigger("search");
  };

  const handleFilter = (date) => {
    if (date) {
      const filtered = expense.filter((item) => item.date === date);
      setFilteredExpense(filtered);
      setSelectedTrigger("filter");
    } else {
      setFilteredExpense(expense); // Reset to all expenses if no date is selected
      setSelectedTrigger("");
    }
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="main">
        <ExpenseInputForm onDataAdd={handleDataAdd} />
        <div className="expenseView">
          <div className="filterAndSearch">
            <Filter options={expense} onFilter={handleFilter} />
            <Search options={expense} onSelect={handleSelect} />
          </div>
          <TableUI
            showData={
              selectedTrigger === "search" ? searchedExpense : filteredExpense
            }
            onDelete={handleDataDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
