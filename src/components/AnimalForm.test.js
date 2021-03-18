import React from 'react';
import { render } from '@testing-library/react';
import AnimalForm from './AnimalForm';

test("AnimalForm renders", () => {
  render(<AnimalForm errors={[]} />);
})