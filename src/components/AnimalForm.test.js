import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("AnimalForm renders", () => {
  render(<AnimalForm errors={[]} />);
})

test("AnimalForm renders error message when there are errors", () => {
  render(<AnimalForm errors={["this is an error"]} />)
  screen.getByText(/there are errors/i)
});

test("AnimalForm adds an animal when form is filled and submitted", () => {
  render(<AnimalForm errors={[]} />);

  const speciesInput = screen.getByLabelText(/species/i);

  userEvent.type(speciesInput, "Wombat");

  const submitButton = screen.getByText(/submit/i);

  userEvent.click(submitButton);

  expect(screen.getByText("Wombat")).toBeDefined();
})

