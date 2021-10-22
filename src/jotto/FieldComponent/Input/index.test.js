import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Input from ".";
import { findByTestAttr } from "../../../test/testUtils";

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
