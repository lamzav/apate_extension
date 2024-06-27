// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock window.close function
window.close = jest.fn();

// Mock event handlers for onChange, onFocus, onBlur, onClick, etc.
export const mockEventHandler = jest.fn();
