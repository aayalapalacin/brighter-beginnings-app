import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photos from '../photos'; 

const mockThumbnailsRef = { current: null };

jest.mock('yet-another-react-lightbox', () => ({
  __esModule: true,
  default: () => <div>Mocked Lightbox</div>,
  ThumbnailsRef: { current: null },
}));

describe('Career component rendering', () => {
  test("renders Careers sub component", () => {
    render(
          <Photos />
    );
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument();
    expect(screen.getByText('The children have a unique opportunity to explore over an acre of New England\'s open beauty...')).toBeInTheDocument();  });
}
);
