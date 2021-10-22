import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Jotto from ".";

const setup = () => shallow(<Jotto />);

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
