import React from "react";
import "./ListItem.scss";

export default function ListItem({ name, onClose }) {
  return (
    <div className="list-item-container">
      <span className="list-item-text">{name}</span>
      <span className="cross-icon" onClick={() => onClose()}>
        &#215;
      </span>
    </div>
  );
}
