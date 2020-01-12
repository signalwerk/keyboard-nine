import React from "react";
import "./styles.css";

function Button({ label, onStart, onEnd, active, width, heigh, className }) {
  return (
    <button
      className={`${className} Button Button--${
        active ? "active" : "normal"
      } Button--width-${width ? width : "normal"} Button--heigh-${
        heigh ? heigh : "normal"
      }`}
      onMouseDown={e => (onStart ? onStart(e) : null)}
      onMouseUp={e => (onEnd ? onEnd(e) : null)}
      onTouchStart={e => {
        if (onStart) {
          onStart(e);
          e.preventDefault();
        }
      }}
      onTouchEnd={e => {
        if (onEnd) {
          onEnd(e);
          e.preventDefault();
        }
      }}
    >
      {label}
    </button>
  );
}

export default Button;
