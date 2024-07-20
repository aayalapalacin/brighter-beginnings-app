import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reviews from '../reviews'; 
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
        img: "/programstaff.png",
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
      // <BrowserRouter>
            // <Context.Provider value={mockContextValue}>
          <Reviews />
        // </Context.Provider>
      // </BrowserRouter>
    );

    expect(screen.getByTestId('reviews')).toBeInTheDocument();

  });
});


describe("images rendering in reviews component",()=>{
  test("lilly banner and reviews images rendering",()=>{
    render(
          <Reviews />
    );
    const lillyBanner = screen.getByRole('img', { name: /banner/i });
    expect(lillyBanner).toBeInTheDocument();
    expect(lillyBanner).toHaveAttribute('src', '/staff_images/Lilly.jpg');

    const google = screen.getByRole('img', { name: /google_img/i });
    expect(google).toBeInTheDocument();
    expect(google).toHaveAttribute('src', '/reviews_images/google.webp');

    const facebook = screen.getByRole('img', { name: /facebook_img/i });
    expect(facebook).toBeInTheDocument();
    expect(facebook).toHaveAttribute('src', '/reviews_images/facebook.png');

    const yelp = screen.getByRole('img', { name: /yelp_img/i });
    expect(yelp).toBeInTheDocument();
    expect(yelp).toHaveAttribute('src', '/reviews_images/yelp.webp');

    const care = screen.getByRole('img', { name: /care_img/i });
    expect(care).toBeInTheDocument();
    expect(care).toHaveAttribute('src', '/reviews_images/care.png');


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
