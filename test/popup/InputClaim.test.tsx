import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputClaim, { MAX_CHAR_COUNT } from "../../src/popup/InputClaim";

test("renders without crashing", () => {
  render(<InputClaim />);
});

test("renders the input element", () => {
  render(<InputClaim />);
  const inputElement = screen.getByTestId("input-claim");
  expect(inputElement).toBeInTheDocument();
});

test("renders the textarea element", () => {
  render(<InputClaim />);
  const inputTextarea = screen.getByTestId("claim-text");
  expect(inputTextarea).toBeInTheDocument();
  expect(inputTextarea).toHaveAttribute("placeholder", "Enter your claim here");
});

test("textarea updates its value on change", () => {
  render(<InputClaim />);
  const inputTextarea = screen.getByTestId("claim-text");
  userEvent.type(inputTextarea, "Test Claim");
  expect(inputTextarea).toHaveValue("Test Claim");
});

/* Test that character count updates correctly */
test("textarea updates character count and does not exceed MAX_CHAR_COUNT", () => {
  render(<InputClaim />);
  const inputTextarea = screen.getByTestId("claim-text");
  const characterCount = screen.getByTestId("character-count");
  expect(characterCount).toHaveTextContent(`${MAX_CHAR_COUNT} character limit`);

  let claimText = "Test Claim";
  userEvent.type(inputTextarea, claimText);
  expect(characterCount).toHaveTextContent(
    `${claimText.length}/400 characters`
  );

  claimText = `This is some placeholder text to test that the textarea only allows a maximum character limit of ${MAX_CHAR_COUNT}. This is some placeholder text to test that the textarea only allows a maximum character limit of ${MAX_CHAR_COUNT}. This is some placeholder text to test that the textarea only allows a maximum character limit of ${MAX_CHAR_COUNT}. This is some placeholder text to test that the textarea only allows a maximum character limit of ${MAX_CHAR_COUNT}. This is some placeholder text to test that the textarea only allows a maximum character limit of ${MAX_CHAR_COUNT}.`;
  userEvent.clear(inputTextarea);
  userEvent.type(inputTextarea, claimText);
  if (claimText.length >= MAX_CHAR_COUNT) {
    expect(inputTextarea).toHaveValue(claimText.slice(0, MAX_CHAR_COUNT));
    expect(characterCount).toHaveTextContent("Character limit reached");
  } else {
    expect(characterCount).toHaveTextContent(
      `${claimText.length}/400 characters`
    );
  }
});
