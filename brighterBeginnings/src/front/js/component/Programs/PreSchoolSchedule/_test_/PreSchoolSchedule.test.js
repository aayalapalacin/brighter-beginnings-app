import React from 'react';
import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PreschoolSchedule from "../../PreSchoolSchedule/PreSchoolSchedule"
describe('PreSchool Schedule component rendering', () => {
  test("renders PreSchool schedule ", () => {
    render(
        <PreschoolSchedule />
    );
    expect(screen.getByTestId('preschool-schedule')).toBeInTheDocument();

  });
}
);


