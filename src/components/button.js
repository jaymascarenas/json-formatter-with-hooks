import React from "react";

const Button = props => {
  return (
    <button type="submit" onClick={props.buttonAction}>
      {props.buttonName}
    </button>
  );
};

export default Button;
