module.exports = {
  ...jest.requireActual("../index.js"),
  __esModule: true,
  //TODO: update return value for Redux / Context implementation
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve("party")),
};
