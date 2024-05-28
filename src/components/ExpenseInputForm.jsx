import React from "react";
import { useState } from "react";
import "./expenseInputForm.css";
import Button from "./Button";

const ExpenseInputForm = ({ onDataAdd }) => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDataAdd({ date, item, cost });
    setDate("");
    setItem("");
    setCost("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Date:</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Item name:</label>
          <input
            type="text"
            required
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Cost(BDT):</label>
          <input
            type="number"
            required
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="fieldAdd">
          <Button
            type="submit"
            name="Add Expense"
            bcolor="rgb(3, 63, 3)"
            bord="none"
          />
        </div>
      </form>
    </div>
  );
};


export default ExpenseInputForm;
