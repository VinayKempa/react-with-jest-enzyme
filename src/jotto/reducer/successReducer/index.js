import { CORRECT_GUESS } from "../../action/types";

/**
 * @function successReducer
 * @param {boolean} state
 * @param {any}
 *
 * @returns {boolean}
 */
const successReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case CORRECT_GUESS: {
      return true;
    }
    default: {
      return state;
    }
  }
};

export default successReducer;
