import React from "react";
import { mount } from "enzyme";
import Jotto from ".";
import { findByTestAttr } from "../test/testUtils";

/**
 * Create a wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial Conditions.
 * @returns {Wrapper} - Enzyme Wrapper of mounter App Component
 */
const setUp = (state = {}) => {
  //TODO: Apply state
  const wrapper = mount(<Jotto />);

  // add value to input box;
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe.skip("No words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  test("create guessedWords table with one row", () => {
    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRow).toHaveLength(1);
  });
});
describe.skip("Some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });

  test("adds row to the guessedWords table", () => {
    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRow).toHaveLength(2);
  });
});
describe.skip("guess secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });

    // add value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockevent = { target: { value: "party" } };
    inputBox.simulate("change", mockevent);
    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("adds row to the guessedWords table", () => {
    const guessedWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRow).toHaveLength(3);
  });

  test("should display congrats Component", () => {
    const congratsComp = findByTestAttr(wrapper, "component-congrats");
    expect(congratsComp.text().length).toBeGreaterThan(0);
  });
  test("should not display input component ", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBeFalsy();

    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBeFalsy();
  });
});
