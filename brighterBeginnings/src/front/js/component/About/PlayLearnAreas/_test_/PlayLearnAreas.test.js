import React from 'react';
import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayLearnAreas from "../../PlayLearnAreas/PlayLearnAreas"
describe('PlayLearnAreas component rendering', () => {
  test("renders PlayLearnAreas ", () => {
    render(
        <PlayLearnAreas />
    );
    expect(screen.getByTestId('play-and-learn')).toBeInTheDocument();

  });
}
);


