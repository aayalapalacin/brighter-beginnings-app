// src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../front/js/pages/about'; 
import { Context } from '../front/js/store/appContext';
import { BrowserRouter, } from "react-router-dom";

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
    philosophyData: [
      {
        accordion_title: "Philosophy",
        age: "",
        start: 0,
        end: 0,
        img: "/about_images/scroll.png",
        bg_color: "",
        dropdownData: [
          {
            "title": "philosophy title",
            "description": "philosophy description",
            "color": "carrot"
          }
        ]
        
      },
    ],
  },
  actions: {
    // mock any necessary actions here
  },
};
describe("About sub components", ()=>{
  test('renders About component and sub components', () => {
    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
          <About />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('play-and-learn')).toBeInTheDocument();
    expect(screen.getByTestId('accordian')).toBeInTheDocument();

  });
});

