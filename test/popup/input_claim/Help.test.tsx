import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Help from "../../../src/popup/input_claim/Help";

test("displays help icon", () => {
  render(<Help />);
  const helpButton = screen.getByTestId("help-button");
  expect(helpButton).toBeInTheDocument();
});

test("opens modal on icon click", () => {
  render(<Help />);
  const helpIcon = screen.getByTestId("help-button");
  userEvent.click(helpIcon);
  const helpModal = screen.getByTestId("help-modal");
  expect(helpModal).toBeInTheDocument();
});

test("closes modal on modal close button click", () => {
  render(<Help />);
  const helpIcon = screen.getByTestId("help-button");
  userEvent.click(helpIcon);
  const closeButton = screen.getByTestId("modal-close-button");
  userEvent.click(closeButton);
  const helpModal = screen.queryByTestId("help-modal");
  expect(helpModal).not.toBeInTheDocument();
});
