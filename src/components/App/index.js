import React from "react";
import "./styles.css";
import Text from "../Text";
import KeyboardNine from "../KeyboardNine";
import KeyboardClassic from "../KeyboardClassic";
import { KEYBOARD } from "../../settings";

import { UIProvider, UIConsumer } from "../../store";

function App() {
  return (
    <UIProvider>
      <UIConsumer>
        {context => (
          <div className="App">
            <div className="App__text">
              <Text context={context} />
            </div>
            <div className="App__keyboard">
              {context.keyboardStyle === KEYBOARD.NINE ? (
                <KeyboardNine />
              ) : null}
              {context.keyboardStyle === KEYBOARD.CLASSIC ? (
                <KeyboardClassic />
              ) : null}
            </div>
          </div>
        )}
      </UIConsumer>
    </UIProvider>
  );
}

export default App;
