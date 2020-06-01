import React from "react";
import "./button.css";
function Button({ label }) {
  return (
    <div className="btn-style" data-testid="button">
      Hi! {label}
    </div>
  );
}

export default Button;
