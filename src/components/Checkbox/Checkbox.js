import React from "react";
import "./Checkbox.scss";

export const CheckBox = props => {
  return (
    <div className="checkbox-container">
      <input
        key={props.id}
        onChange={props.handleCheckChildElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      <span className="checkbox-value">{props.value}</span>
    </div>
  );
};

export default CheckBox;
