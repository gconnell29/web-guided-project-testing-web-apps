import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders AnimalForm", () => {
  render(<AnimalForm />);
});

test("can fill in form and display", () => {
  render(<AnimalForm />);

  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  userEvent.type(speciesInput, "Grizzly Bear");
  userEvent.type(ageInput, "4");
  userEvent.type(notesInput, "grrrr");

  expect(speciesInput).toHaveValue("Grizzly Bear");
  // ....

  const button = screen.getByRole("button");

  userEvent.click(button);

  const newAnimal = screen.findByText(/grizzly bear/i);

  newAnimal
    .then((item) => {
      expect(item).toBeTruthy();
    });
});