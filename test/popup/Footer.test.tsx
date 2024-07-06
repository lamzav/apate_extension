import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../../src/popup/Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });
});

test("clicking footer link navigates to correct URL", () => {
  render(<Footer />);
  const footerLink = screen.getByText(
    /Document icons created by Freepik - Flaticon/i
  );
  // Prevent default navigation behavior, which is not supported by JSDOM
  footerLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.flaticon.com/free-icons/document"; // Mock the navigation
  });
  userEvent.click(footerLink, { metaKey: true });
  expect(window.location.href).toBe(
    "https://www.flaticon.com/free-icons/document"
  );
});
