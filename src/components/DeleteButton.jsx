import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="delete">
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ color: "#f70808", fontSize: "x-large" }}
      ></FontAwesomeIcon>
    </button>
  );
};

export default DeleteButton;
