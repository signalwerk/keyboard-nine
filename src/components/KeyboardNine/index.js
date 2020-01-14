import React, { Fragment } from "react";
import "./styles.css";
import Block from "../Block";
import Button from "../Button";
import { TYPEMODE, ORIENTATION, KEYBOARD } from "../../settings";

import { UIConsumer } from "../../store";

function KeyboardNine() {
  return (
    <UIConsumer>
      {context => (
        <div className="KeyboardNine">
          <div className="KeyboardNine__main">
            <Block className="Button--borderTopBlack " id="block01" />
            <Block
              className="Button--borderTopBlack Button--borderLeft"
              id="block02"
              width="large"
            />
            <Block
              className="Button--borderTopBlack Button--borderLeft"
              id="block03"
              width="large"
            />
            <Block className="Button--borderTop" id="block04" width="large" />
            <Block
              className="Button--borderTop Button--borderLeft"
              id="block05"
              width="large"
            />
            <Block
              className="Button--borderTop Button--borderLeft"
              id="block06"
              width="large"
            />

            {context.orientation === ORIENTATION.L ? (
              <Fragment>
                <Button
                  className="Button--borderTop"
                  onStart={e => context.action.startBackspace()}
                  onEnd={e => context.action.endBackspace()}
                  label="⌫"
                  width="1-3"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onEnd={e => context.action.append(" ")}
                  label="Space"
                  width="1-3"
                ></Button>
                <Block
                  className="Button--borderTop Button--borderLeft"
                  id="block07"
                  width="large"
                />

                <Button
                  className="Button--borderTop Button--negative"
                  onEnd={e => context.action.orientation(ORIENTATION.L)}
                  label="L"
                  active={true}
                  width="1-6"
                  heigh="med"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onEnd={e => context.action.append("\n")}
                  label="‎⏎"
                  heigh="med"
                  width="1-3"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onEnd={e =>
                    context.action.setTypeMode(
                      context.typeMode === TYPEMODE.CAP
                        ? TYPEMODE.NORMAL
                        : TYPEMODE.CAP
                    )
                  }
                  label="⇪"
                  active={context.typeMode === TYPEMODE.CAP}
                  width="1-6"
                  heigh="med"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  label="🌐"
                  width="1-6"
                  heigh="med"
                  onEnd={e => context.action.setKeyboardStyle(KEYBOARD.CLASSIC)}
                ></Button>
                <Button
                  className="Button--negative Button--borderTop Button--borderLeft"
                  onEnd={e => context.action.orientation(ORIENTATION.R)}
                  label="R"
                  width="1-6"
                  heigh="med"
                ></Button>
              </Fragment>
            ) : (
              <Fragment>
                <Block
                  className="Button--borderTop"
                  id="block07"
                  width="large"
                />
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onEnd={e => context.action.append(" ")}
                  label="Space"
                  width="1-3"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onStart={e => context.action.startBackspace()}
                  onEnd={e => context.action.endBackspace()}
                  label="⌫"
                  width="1-3"
                ></Button>

                <Button
                  className="Button--borderTop Button--negative"
                  onEnd={e => context.action.orientation(ORIENTATION.L)}
                  label="L"
                  width="1-6"
                  heigh="med"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  label="🌐"
                  width="1-6"
                  heigh="med"
                  onEnd={e => context.action.setKeyboardStyle(KEYBOARD.CLASSIC)}
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onEnd={e =>
                    context.action.setTypeMode(
                      context.typeMode === TYPEMODE.CAP
                        ? TYPEMODE.NORMAL
                        : TYPEMODE.CAP
                    )
                  }
                  label="⇪"
                  active={context.typeMode === TYPEMODE.CAP}
                  width="1-6"
                  heigh="med"
                ></Button>
                <Button
                  className="Button--borderTop Button--borderLeft"
                  onEnd={e => context.action.append("\n")}
                  label=" ⏎"
                  heigh="med"
                  width="1-3"
                ></Button>

                <Button
                  className="Button--borderTop Button--borderLeft Button--negative"
                  onEnd={e => context.action.orientation(ORIENTATION.R)}
                  label="R"
                  active={true}
                  width="1-6"
                  heigh="med"
                ></Button>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </UIConsumer>
  );
}

export default KeyboardNine;
