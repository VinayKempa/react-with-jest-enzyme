import { shallow } from "enzyme";
import Congrats from ".";
import { findByTestAttr } from "../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @param {Object} props - React props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Congrats {...props} />);

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congats-message");
  expect(component.text().length).not.toBe(0);
});
