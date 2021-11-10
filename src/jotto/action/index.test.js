import moxios from "moxios";
import { getSecretWord, correctGuess } from ".";
import { CORRECT_GUESS } from "./types";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secretWord is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    return getSecretWord().then((data) => {
      expect(data).toBe("party");
    });
  });
});

describe("correctGuess", () => {
  test("returns an object with type CORRECT_GUESS", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: CORRECT_GUESS });
  });
});
