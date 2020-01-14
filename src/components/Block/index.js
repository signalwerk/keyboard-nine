import React from "react";
import "./styles.css";
import { UIConsumer } from "../../store";
import { BLOCKS } from "../../settings";
import Button from "../Button";

function Block({ id, className }) {
  return (
    <UIConsumer>
      {context => (
        <Button
          className={`${className ? `${className} ` : ""}Button--block`}
          onStart={e => context.action.startBlockPress(id)}
          onEnd={e => context.action.endBlockPress(id)}
          label={BLOCKS[id].label[context.typeMode]}
          width="1-3"
        ></Button>
      )}
    </UIConsumer>
  );
}

export default Block;
