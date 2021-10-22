import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Input from ".";
import { findByTestAttr } from "../../../test/testUtils";

const mockSetCurrentGuess = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

/**
 * Setup function for Input Component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
};

test("Input renders without errors", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

describe("State controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
