export const TYPEMODE = {
  NORMAL: "normal",
  CAP: "cap",
  PUNCTUATION: "punct"
};

export const KEYBOARD = {
  NINE: "nine",
  CLASSIC: "classic"
};

export const ORIENTATION = {
  R: "r",
  L: "l"
};

export const BLOCK_TIMEOUT = 400;
export const REPEAT_TIMEOUT = 300;

// to keep everything super configurable
const keyReducer = (accumulator, currentChar, index) => {
  const upperChar = currentChar.toUpperCase();
  return {
    ...accumulator,
    [`key${upperChar}`]: {
      label: {
        normal: currentChar,
        cap: upperChar,
        punct: PUNCTUATION[index]
      },
      value: {
        normal: currentChar,
        cap: upperChar,
        punct: PUNCTUATION[index]
      }
    }
  };
};

const PUNCTUATION = "0123456789.:;?!/(){}&%+-$§".split("");
export const KEYS = "qzdpjgwbycnlustmxfoaeihrvk"
  .split("")
  .reduce(keyReducer, {});

export const BLOCKS = {
  block01: {
    label: {
      normal: "abcd",
      cap: "ABCD"
    },
    value: {
      normal: ["a", "b", "c", "d"],
      cap: ["A", "B", "C", "D"]
    }
  },
  block02: {
    label: {
      normal: "efghi",
      cap: "EFGHI"
    },
    value: {
      normal: ["e", "f", "g", "h", "i"],
      cap: ["E", "F", "G", "H", "I"]
    }
  },
  block03: {
    label: {
      normal: "jklm",
      cap: "JKLM"
    },
    value: {
      normal: ["j", "k", "l", "m"],
      cap: ["J", "K", "L", "M"]
    }
  },
  block04: {
    label: {
      normal: "nopq",
      cap: "NOPQ"
    },
    value: {
      normal: ["n", "o", "p", "q"],
      cap: ["N", "O", "P", "Q"]
    }
  },
  block05: {
    label: {
      normal: "rstuv",
      cap: "RSTUV"
    },
    value: {
      normal: ["r", "s", "t", "u", "v"],
      cap: ["R", "S", "T", "U", "V"]
    }
  },
  block06: {
    label: {
      normal: "wxyz",
      cap: "WXYZ"
    },
    value: {
      normal: ["w", "x", "y", "z"],
      cap: ["W", "X", "Y", "Z"]
    }
  },
  block07: {
    label: {
      normal: "äöü_",
      cap: "ÄÖÜ_"
    },
    value: {
      normal: ["ä", "ö", "ü", "_"],
      cap: ["Ä", "Ö", "Ü", "_"]
    }
  }
};
