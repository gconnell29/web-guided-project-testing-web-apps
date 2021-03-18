import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalForm from './AnimalForm';

test("AnimalForm renders", () => {
  render(<AnimalForm errors={[]} />);
})

test("AnimalForm renders error message when there are errors", () => {
  render(<AnimalForm errors={["this is an error"]} />)

  screen.getByText("there are errors!!!!!")
})