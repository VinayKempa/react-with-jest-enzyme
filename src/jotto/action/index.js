import axios from "axios";
import { CORRECT_GUESS } from "./types";

export const getSecretWord = () => {
  return axios.get("http://localhost:3030").then((resp) => resp.data);
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type CORRECT_GUESS
 */
export const correctGuess = () => {
  return {
    type: CORRECT_GUESS,
  };
};
