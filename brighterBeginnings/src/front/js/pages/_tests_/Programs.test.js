import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Programs from '../programs'; 
import { Context } from '../../store/appContext';
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Staff from "../staff";

const mockContextValue = {
  store: {
    childProgram: { firstName: "Alex", yearsOld: "", monthsOld: "7" },
    availablePrograms: [
      {
        accordion_title: "Program 1",
        age: "Age Range",
        img: "/program1.png",
        dropdownData: [
          { title: "Price", description: "Program 1 Price", color: "color1" },
          { title: "Description", description: "Program 1 Description", color: "color2" },
          { title: "Schedule", description: "Program 1 Schedule", color: "color3" },
        ],
      },
      {
        accordion_title: "Program 2",
        age: "Age Range",
        img: "/program2.png",
        dropdownData: [
          { title: "Price", description: "Program 2 Price", color: "color1" },
          { title: "Description", description: "Program 2 Description", color: "color2" },
          { title: "Schedule", description: "Program 2 Schedule", color: "color3" },
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
describe("Programs sub components", ()=>{
  test('renders Programs component and sub components', () => {
    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
          <Programs />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('programs')).toBeInTheDocument();

  });
});

describe("images rendering in programs component",()=>{
  test("programs 1 and 2 images rendering",()=>{

    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
          <Programs />
        </Context.Provider>
      </BrowserRouter>
    );


    const programs1 = screen.getByRole('img', { name: /program1/i });
    expect(programs1).toBeInTheDocument();
    expect(programs1).toHaveAttribute('src', '/program1.png');

    const programs2 = screen.getByRole('img', { name: /program2/i });
    expect(programs2).toBeInTheDocument();
    expect(programs2).toHaveAttribute('src', '/program2.png');
  });
})

// describe("About Link", () => {
//   test("onClick to staff page working", () => {
//       render(
//         <MemoryRouter initialEntries={['/']}>
//           <Context.Provider value={mockContextValue}>
//             <Routes>
//               <Route path="/" element={<About />} />
//               <Route path="/staff" element={<Staff />} />
//             </Routes>
//           </Context.Provider>
//         </MemoryRouter>
//       );
  
//       const staffLink = screen.getByRole('link', { name: /Go!/i });
//       expect(staffLink).toBeInTheDocument();
//       expect(staffLink).toHaveAttribute('href', '/staff');
  
//       userEvent.click(staffLink);
  
//       // Check if the navigation happened and the staff component is rendered
//       expect(screen.getByTestId('staff')).toBeInTheDocument();
    
//  });
// });

describe('Programs renders loading when store is empty', () => {
  test("renders loading", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={{ store: {}, actions: {} }}>
          <Programs />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
