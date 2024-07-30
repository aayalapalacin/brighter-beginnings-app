import React from 'react';
import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToddlerSchedule from "../../ToddlerSchedule/ToddlerSchedule"
describe('Toddler Schedule component rendering', () => {
  test("renders Toddler schedule ", () => {
    render(
        <ToddlerSchedule />
    );
    expect(screen.getByTestId('toddler-schedule')).toBeInTheDocument();

  });
}
);


