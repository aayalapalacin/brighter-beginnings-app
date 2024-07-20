// src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../pages/about'; 
import { Context } from '../../store/appContext';
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Staff from "../../pages/staff";

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

describe("images rendering in about component",()=>{
  test("children reading and staff images rendering",()=>{

    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
          <About />
        </Context.Provider>
      </BrowserRouter>
    );


    const readingImg = screen.getByRole('img', { name: /children_reading/i });
    expect(readingImg).toBeInTheDocument();
    expect(readingImg).toHaveAttribute('src', '/about_images/children-reading-books.webp');

    const staffImg = screen.getByRole('img', { name: /staff/i });
    expect(staffImg).toBeInTheDocument();
    expect(staffImg).toHaveAttribute('src', '/home_images/staff.png');
  });
})

describe("About Link", () => {
  test("onClick to staff page working", () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Context.Provider value={mockContextValue}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/staff" element={<Staff />} />
            </Routes>
          </Context.Provider>
        </MemoryRouter>
      );
  
      const staffLink = screen.getByRole('link', { name: /Go!/i });
      expect(staffLink).toBeInTheDocument();
      expect(staffLink).toHaveAttribute('href', '/staff');
  
      userEvent.click(staffLink);
  
      // Check if the navigation happened and the staff component is rendered
      expect(screen.getByTestId('staff')).toBeInTheDocument();
    
 });
});

describe('About renders loading when store is empty', () => {
  test("renders loading", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={{ store: {}, actions: {} }}>
          <About />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
