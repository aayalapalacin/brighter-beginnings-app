// src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/home'; 
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

describe('Home component rendering', () => {
  test("renders Home component and it's sub components", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <Home />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('carousel')).toBeInTheDocument();

    expect(screen.getByTestId('programs-info')).toBeInTheDocument();

    expect(screen.getByTestId('class-dojo')).toBeInTheDocument();

    expect(screen.getByTestId('careers-content')).toBeInTheDocument();
  });
}
);
describe('Home renders loading when store is empty', () => {
  test("renders loading", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={{ store: {}, actions: {} }}>
          <Home />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

