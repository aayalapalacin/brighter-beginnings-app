import React from 'react';
import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "../../Contact/Contact"
describe('Contact component rendering', () => {
  test("renders Contact ", () => {
    render(
        <Contact />
    );
    expect(screen.getByTestId('contact')).toBeInTheDocument();

  });
}
);


