import React from "react";
import "./tableUI.css";
import DeleteButton from "./DeleteButton";

const TableUI = ({ showData, onDelete }) => {
  if (showData.length == 0) {
    return (
      <h3 style={{ fontStyle: "italic" }}>No expense information available</h3>
    );
  }

  return (
    <div className="dataTable">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item name</th>
            <th>Cost</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((items) => (
            <tr key={items.id}>
              <td>{items.date}</td>
              <td>{items.item}</td>
              <td>{items.cost}</td>
              <td>
                <DeleteButton onClick={() => onDelete(items.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUI;
