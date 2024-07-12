// src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Careers from '../careers'; 



describe('Home component rendering', () => {
  test("renders Home component and it's sub components", () => {
    render(
          <Careers />
    );
    expect(screen.getByTestId('careers-content')).toBeInTheDocument();
  });
}
);
