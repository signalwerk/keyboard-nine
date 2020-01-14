import React from "react";
import "./styles.css";
import { UIConsumer } from "../../store";
import { KEYS } from "../../settings";
import Button from "../Button";

function Key({ id, className }) {
  return (
    <UIConsumer>
      {context => (
        <Button
          className={`${
            className ? `${className} ` : ""
          }Button--font-big Button--key`}
          onStart={e => context.action.startKeyPress(id)}
          label={KEYS[id].label[context.typeMode]}
          width="1-8"
          heigh="med"
        ></Button>
      )}
    </UIConsumer>
  );
}

export default Key;
