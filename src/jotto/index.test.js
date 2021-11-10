import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Jotto from ".";

// activate global mock to make sure getSecretWord doesn't make network call

jest.mock("./action");
import { getSecretWord as mockGetSecretWord } from "./action";

const setup = () => mount(<Jotto />);

describe("Jotto application", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without error", () => {
    const appComponent = findByTestAttr(wrapper, "app-component");
    expect(appComponent).toHaveLength(1);
  });
});

describe("getSecretWord", () => {
  beforeEach(() => {
    // Clear the mock tests from previous tests
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord retrived on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord not retrived on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
