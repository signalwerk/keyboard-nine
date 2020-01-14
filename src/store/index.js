import React, { Component } from "react";
import {
  TYPEMODE,
  BLOCKS,
  BLOCK_TIMEOUT,
  ORIENTATION,
  REPEAT_TIMEOUT,
  KEYBOARD,
  KEYS
} from "../settings";

export const UIContext = React.createContext();
export const UIConsumer = UIContext.Consumer;

export class UIProvider extends Component {
  // callback for some buttons
  timedCallback = null;

  state = {
    text: "Hello world!\nPlease type ...",

    keyboardStyle: KEYBOARD.NINE,

    orientation: ORIENTATION.R,

    typeMode: TYPEMODE.NORMAL, // are we in normal writing or cap

    // last block touched
    lastBlock: null,
    lastBlockTypeMode: null,

    // char in block
    blockCharIndex: 0
  };

  clearTimeout = () => {
    clearTimeout(this.timedCallback);
  };

  startKeyPress = key => {
    this.clearTimeout();

    const text = this.state.text + KEYS[key].value[this.state.typeMode];
    this.setState({
      ...this.state,
      typeMode:
        this.state.typeMode === TYPEMODE.CAP
          ? TYPEMODE.NORMAL
          : this.state.typeMode,
      text,
      lastBlock: null
    });
  };

  startBlockPress = block => {
    this.clearTimeout();

    let blockCharIndex = 0;
    let typeMode = this.state.typeMode;

    let newText = this.state.text;

    // press on same block
    if (this.state.lastBlock === block) {
      blockCharIndex = this.state.blockCharIndex + 1;

      // kill last char
      newText = newText.substring(0, newText.length - 1);
      typeMode = this.state.lastBlockTypeMode;
    }

    newText =
      newText +
      BLOCKS[block].value[typeMode][
        blockCharIndex % BLOCKS[block].value[typeMode].length
      ];

    this.setState({
      ...this.state,
      text: newText,
      typeMode: TYPEMODE.NORMAL,
      lastBlockTypeMode: typeMode,
      blockCharIndex,
      lastBlock: block
    });

    this.timedCallback = setTimeout(() => {
      this.startBlockPress(block);
    }, REPEAT_TIMEOUT);
  };

  endBlockPress = block => {
    // nothing
    this.clearTimeout();

    this.timedCallback = setTimeout(() => {
      this.setState({
        ...this.state,

        lastBlock: null
      });
    }, BLOCK_TIMEOUT);
  };

  startBackspace = () => {
    this.clearTimeout();

    const text = this.state.text.substring(0, this.state.text.length - 1);
    this.setState({
      ...this.state,
      text,
      lastBlock: null
    });

    this.timedCallback = setTimeout(() => {
      this.startBackspace();
    }, REPEAT_TIMEOUT);
  };

  endBackspace = () => {
    this.clearTimeout();
  };

  append = str => {
    this.clearTimeout();

    const text = this.state.text + str;
    this.setState({
      ...this.state,
      text,
      lastBlock: null
    });
  };

  setTypeMode = mode => {
    this.clearTimeout();

    this.setState({
      ...this.state,
      typeMode: mode
    });
  };

  orientation = orientation => {
    this.clearTimeout();

    this.setState({
      ...this.state,
      orientation
    });
  };

  setKeyboardStyle = keyboardStyle => {
    this.clearTimeout();

    this.setState({
      ...this.state,
      typeMode: TYPEMODE.NORMAL,
      keyboardStyle
    });
  };

  render() {
    return (
      <UIContext.Provider
        value={{
          ...this.state,

          action: {
            startBlockPress: this.startBlockPress,
            endBlockPress: this.endBlockPress,

            startKeyPress: this.startKeyPress,

            startBackspace: this.startBackspace,
            endBackspace: this.endBackspace,
            append: this.append,
            setTypeMode: this.setTypeMode,
            orientation: this.orientation,
            setKeyboardStyle: this.setKeyboardStyle
          }
        }}
      >
        {this.props.children}
      </UIContext.Provider>
    );
  }
}
