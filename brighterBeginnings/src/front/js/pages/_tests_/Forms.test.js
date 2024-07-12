import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forms from '../../pages/forms'; 
import { Context } from '../../store/appContext';
import { BrowserRouter } from "react-router-dom";

const mockContextValue = {
  store: {
    availablePrograms: [
      {
        accordion_title: "Program 1",
        age: "Age Range",
        dropdownData: [
          { title: "Price", description: "Program 1 Price", color: "color1" },
          { title: "Description", description: "Program 1 Description", color: "color2" },
          { title: "Schedule", description: "Program 1 Schedule", color: "color3" },
        ],
      },
    ],
  },
  actions: {
    // mock any necessary actions here
  },
};

describe('Forms component rendering', () => {
  test("renders Forms component and accordion component", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <Forms />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('accordian-title-first')).toBeInTheDocument();

    
  });
}
);
