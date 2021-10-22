import Counter from "./Counter";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Counter />);

/**
 * Helper function to fetch element with data-test attribute with value equal passed to param
 * @param {ShallowWrapper} wrapper
 * @param {String} val
 * @returns {Array}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("Renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("Renders non-empty component without crashing", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test("Render increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("Renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("Counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("Clicking increment button increments counter display", () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate("click");

  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("Render decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("Clicking decrement button decrements counter display", () => {
  const wrapper = setup();
  const ibutton = findByTestAttr(wrapper, "increment-button");
  ibutton.simulate("click");

  const ibutton2 = findByTestAttr(wrapper, "increment-button");
  ibutton2.simulate("click");

  const dbutton = findByTestAttr(wrapper, "decrement-button");
  dbutton.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("Do not allow count below 0 on decrement", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  const error = findByTestAttr(wrapper, "counter-error");
  expect(error.length).toBe(1);
});

test("Do not allow count below 0 on decrement", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  const ibutton = findByTestAttr(wrapper, "increment-button");
  ibutton.simulate("click");

  const error = findByTestAttr(wrapper, "counter-error");
  expect(error.length).toBe(0);
});
