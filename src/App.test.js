import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Arrange
// Act
// Assert

test("renders App", () => {
  render(<App bogus={[]} />);
});