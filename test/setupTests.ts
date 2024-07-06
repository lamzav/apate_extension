// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock window functions
window.open = jest.fn();
window.close = jest.fn();

// Mock window.location
let mockHref = "";
Object.defineProperty(window, "location", {
  value: {
    get href() {
      return mockHref;
    },
    set href(newValue) {
      mockHref = newValue;
      console.log("window.location.href mock setter called with", newValue);
    },
  },
  writable: true,
});

// Mock event handlers for onChange, onFocus, onBlur, onClick, etc.
export const mockEventHandler = jest.fn();

// Ensure the #window element exists for react-modal
if (!document.getElementById("window")) {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "window");
  document.body.appendChild(modalRoot);
}
