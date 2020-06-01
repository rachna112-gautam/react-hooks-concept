import React from "react";
import "./item.css";

function item(props) {
  return (
    <div className="item-style">
      {props.editable ? (
        <input
          onKeyPress={(e) => props.onKeyPress(e, props.index)}
          type="text"
          defaultValue={props.item.name}
        />
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
      )}
      <h3>{props.item.calories}</h3>
      <button
        name={props.item.name}
        className="remove-btn"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default item;
