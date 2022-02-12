import React from "react";
import "./UniButton.scss";

export default function UniButton(props) {
  return (
    <div>
      <button className="bt" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
