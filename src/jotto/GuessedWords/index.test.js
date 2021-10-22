import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import GuessedWords from ".";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @param {Object} props - React props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe("If there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("render GuessedWords without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("Render the instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = setup({
      guessedWords: [
        {
          guessedWord: "train",
          letterMatchCount: 3,
        },
        {
          guessedWord: "agile",
          letterMatchCount: 1,
        },
        {
          guessedWord: "party",
          letterMatchCount: 5,
        },
      ],
    });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders 'guessed words' section", () => {
    const guessedwordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedwordsNode.length).toBe(1);
  });

  test("corrent number of guessed words", () => {
    const guessedwordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedwordsNodes.length).toBe(3);
  });
});
