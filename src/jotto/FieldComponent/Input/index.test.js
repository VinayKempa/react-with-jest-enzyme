import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Input from ".";
import { findByTestAttr } from "../../../test/testUtils";

/**
 * Setup function for Input Component
 * @returns {ShallowWrapper}
 */
const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("Render", () => {
  describe("succes is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("Input renders without errors", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBeFalsy();
    });
    test("Submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBeFalsy();
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("Input renders without errors", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box to show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBeTruthy();
    });
    test("Submit button to show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBeTruthy();
    });
  });
});

describe("State controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("Field is cleard upon submit button clcik", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
