import React, { useState } from "react";
import useIsMounted from "../../isMounted";

import "./styles.css";

function Button({ label, onStart, onEnd, active, width, heigh, className }) {
  const [clicked, setClicked] = useState(false);
  const isMounted = useIsMounted();

  return (
    <button
      className={`${className ? `${className} ` : ""}Button Button--${
        active ? "active" : "normal"
      } Button--width-${width ? width : "normal"} Button--heigh-${
        heigh ? heigh : "normal"
      } Button--clicked-${clicked ? "yes" : "no"}`}
      onMouseDown={e => {
        if (onStart) {
          onStart(e);
        }
        setClicked(true);
      }}
      onMouseUp={e => {
        if (onEnd) {
          onEnd(e);
        }
        setTimeout(() => {
          if (isMounted.current) {
            setClicked(false);
          }
        }, 100);
      }}
      onTouchStart={e => {
        if (onStart) {
          onStart(e);
        }
        setClicked(true);
        e.preventDefault();
      }}
      onTouchEnd={e => {
        if (onEnd) {
          onEnd(e);
        }
        setTimeout(() => {
          if (isMounted.current) {
            setClicked(false);
          }
        }, 100);
        e.preventDefault();
      }}
    >
      {label}
    </button>
  );
}

export default Button;
