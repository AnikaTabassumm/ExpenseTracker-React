import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ bcolor, name, bord }) => {
  const buttonStyle = {
    backgroundColor: bcolor,
    border: bord,
  };
  return (
    <button style={buttonStyle} className="but">
      {name}
    </button>
  );
};

Button.prototype = {
  name: PropTypes.string.isRequired,
  bcolor: PropTypes.string.isRequired,
  bord: PropTypes.string,
};

export default Button;
