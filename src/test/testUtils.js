/**
 * Helper function to fetch element with data-test attribute with value equal passed to param
 * @param {ShallowWrapper} wrapper
 * @param {String} val
 * @returns {Array}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
