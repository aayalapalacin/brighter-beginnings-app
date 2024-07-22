import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from '../Carousel'; 
import { Context } from '../../../../store/appContext';
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";
import About from '../../../../pages/about';
import Staff from '../../../../pages/staff';
const mockContextValue = {
  store: {
    childProgram: { firstName: "Alex", yearsOld: "2", monthsOld: "" },
    availablePrograms: [
      {
         img: "/programs_images/infant.png",
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

describe('Programs component rendering', () => {
  test("renders Programs component and it's sub components", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <Carousel />
        </Context.Provider>
      </BrowserRouter>
    );


    expect(screen.getByTestId('carousel')).toBeInTheDocument();


  });
}
);


describe("images rendering in programs info component",()=>{
  test("rendering backpack imge",()=>{

    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
          <Carousel />
        </Context.Provider>
      </BrowserRouter>
    );


    const playgroundPhoto = screen.getByRole('img', { name: /playground/i });
      expect(playgroundPhoto).toBeInTheDocument();
      expect(playgroundPhoto).toHaveAttribute('src', '/home_images/playground_photo.jpeg');
    
      const staffPhoto = screen.getByRole('img', { name: /staff/i });
      expect(staffPhoto).toBeInTheDocument();
      expect(staffPhoto).toHaveAttribute('src', '/home_images/staff2.png');
  
    
    
  });
})


describe("Carousel Staff Link", () => {
  test("onClick Learn More to staff page working", () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Context.Provider value={mockContextValue}>
            <Routes>
              <Route path="/" element={<Carousel />} />
              <Route path="/staff" element={<Staff />} />
            </Routes>
          </Context.Provider>
        </MemoryRouter>
      );
      const learnMoreBtn = screen.getByTestId('learn-more-staff');
      fireEvent.click(learnMoreBtn);

      expect(screen.getByTestId('staff')).toBeInTheDocument();
    
 });
});

describe("Carousel About Link", () => {
  test("onClick See More to about page working", () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Context.Provider value={mockContextValue}>
            <Routes>
              <Route path="/" element={<Carousel />} />
              <Route path="/about" element={<About />} />
              <Route path="/staff" element={<Staff />} />
            </Routes>
          </Context.Provider>
        </MemoryRouter>
      );
      const seeMoreBtn = screen.getByTestId('see-more');
      fireEvent.click(seeMoreBtn);

      expect(screen.getByTestId('about')).toBeInTheDocument();
    
 });
});

