// src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Staff from '../staff'; 
import { staffData } from '../../utils/staff_data'; 

describe('Staff component rendering', () => {
  test("renders Staff component", () => {
    render(
          <Staff />
    );
    expect(screen.getByTestId('staff')).toBeInTheDocument();
  });
}
);

describe('Staff images', () => {
  test("renders Staff images", () => {
    render(
          <Staff />
    );
    staffData.forEach((staff) => {
      const staffImgJpeg = staff.name === "Zuleyma" || staff.name === "Nina";
      const staffImage = screen.getByRole('img', { name: staff.name });
    expect(staffImage).toBeInTheDocument();
    expect(staffImage).toHaveAttribute('src', `staff_images/${staffImgJpeg ? staff.name+".jpeg" : staff.name+".jpg"}`);

    })
  });
}
);


