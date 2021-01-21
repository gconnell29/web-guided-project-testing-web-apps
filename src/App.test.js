import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Arrange
// Act
// Assert

test("renders App", () => {
  render(<App bogus={[]} />);
});

test("header gets rendered", () => {
  render(<App bogus={[]} />);

  // const header = screen.getByText("Add New Animal");
  const header = screen.getByText(/add new animal/i);
  // const bogus = document.createElement("h3"); // <h3 />

  expect(header).toBeInTheDocument();
  // expect(bogus).toBeInTheDocument();
});