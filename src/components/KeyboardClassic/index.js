import React, { Fragment } from "react";
import "./styles.css";
import Key from "../Key";
import Button from "../Button";
import { TYPEMODE, ORIENTATION, KEYBOARD } from "../../settings";

import { UIConsumer } from "../../store";

function KeyboardClassic() {
  return (
    <UIConsumer>
      {context => (
        <div className="KeyboardClassic">
          <div className="KeyboardClassic__main">
            {"QZDPJGWB".split("").map(item => (
              <Key
                key={`key${item}`}
                className="Button--borderTopBlack"
                id={`key${item}`}
              />
            ))}
            {"YCNLUSTM".split("").map(item => (
              <Key
                key={`key${item}`}
                className="Button--borderTop"
                id={`key${item}`}
              />
            ))}
            {"XFOAEIHR".split("").map(item => (
              <Key
                key={`key${item}`}
                className="Button--borderTop"
                id={`key${item}`}
              />
            ))}

            {"VK".split("").map(item => (
              <Key
                key={`key${item}`}
                className="Button--borderTop"
                id={`key${item}`}
              />
            ))}

            <Button
              className="Button--borderTop Button--borderLeft"
              onEnd={e => context.action.append(" ")}
              label="Space"
              width="9-16"
              heigh="med"
            ></Button>

            <Fragment>
              <Button
                className="Button--borderTop Button--borderLeft"
                onStart={e => context.action.startBackspace()}
                onEnd={e => context.action.endBackspace()}
                label="⌫"
                width="3-16"
                heigh="med"
              ></Button>

              <Button
                className="Button--borderTop Button--negative"
                onEnd={e => context.action.orientation(ORIENTATION.L)}
                label="L"
                active={context.orientation === ORIENTATION.L}
                width="1-6"
                heigh="med"
              ></Button>

              <Button
                className="Button--borderTop Button--borderLeft"
                label="🌐"
                onEnd={e => context.action.setKeyboardStyle(KEYBOARD.NINE)}
                width="1-6"
                heigh="med"
              ></Button>

              <Button
                className="Button--borderTop Button--borderLeft"
                onEnd={e =>
                  context.action.setTypeMode(
                    context.typeMode === TYPEMODE.PUNCTUATION
                      ? TYPEMODE.NORMAL
                      : TYPEMODE.PUNCTUATION
                  )
                }
                label="012?!"
                active={context.typeMode === TYPEMODE.PUNCTUATION}
                width="1-6"
                heigh="med"
              ></Button>

              {context.orientation === ORIENTATION.R ? (
                <Fragment>
                  <Button
                    className="Button--borderTop Button--borderLeft"
                    onEnd={e => context.action.append("\n")}
                    label=" ‎⏎"
                    heigh="med"
                    width="1-6"
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
                </Fragment>
              ) : (
                <Fragment>
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
                    label=" ‎⏎"
                    heigh="med"
                    width="1-6"
                  ></Button>
                </Fragment>
              )}
              <Button
                className="Button--borderTop Button--borderLeft Button--negative"
                onEnd={e => context.action.orientation(ORIENTATION.R)}
                label="R"
                active={context.orientation === ORIENTATION.R}
                width="1-6"
                heigh="med"
              ></Button>
            </Fragment>
          </div>
        </div>
      )}
    </UIConsumer>
  );
}

export default KeyboardClassic;
