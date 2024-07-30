import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../Navbar/Navbar'; 
import Staff from "../../../pages/staff"
import About from "../../../pages/about"
import Programs from "../../../pages/programs"
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";
import { Context } from '../../../store/appContext';

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

describe("Navbar  Links", () => {
  test("onClick navigates to about ", () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Context.Provider value={mockContextValue}>
            <Routes>
              <Route path="/" element={<Navbar pages={["About", "Programs", "Staff"]}/>} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
            </Routes>
          </Context.Provider>
        </MemoryRouter>
      );
      const aboutLink = screen.getByText(/About/i);
      fireEvent.click(aboutLink);    
      expect(screen.getByTestId('about')).toBeInTheDocument();
    
 });
});


describe("images rendering in navbar component",()=>{
  test("rendering brighter beginnings logo",()=>{

    render(
      <BrowserRouter>
      <Navbar pages={[]}/>
      
      </BrowserRouter>
    );

    const brighterLogo = screen.getByRole('img', { name: /Brighter Beginnings/i });
      expect(brighterLogo).toBeInTheDocument();
      expect(brighterLogo).toHaveAttribute('src', '/home_images/brighterLogo.png');
  
    })
    
  });


