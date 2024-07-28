import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accordion from '../../Accordion/Accordion'; 
import { Context } from '../../../../store/appContext';
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";
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
          { title: "Schedule", description: "toddler schedule", color: "color3" },
        ],
      },
    ],
  },
  actions: {
    // mock any necessary actions here
  },
};

describe('Accordion component rendering', () => {
  test("renders Accordion and toddler schedule ", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <Accordion accordionData={mockContextValue.store.availablePrograms[0]} imgFirst={true} />
        </Context.Provider>
      </BrowserRouter>
    );


    expect(screen.getByTestId('accordion')).toBeInTheDocument();
    expect(screen.getByTestId('toddler-schedule')).toBeInTheDocument();

  });
}
);


describe("images rendering in acoordion info component",()=>{
  test("rendering backpack imge",()=>{

    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
              <Accordion accordionData={mockContextValue.store.availablePrograms[0]} imgFirst={true} />
            </Context.Provider>
      </BrowserRouter>
    );

    const infantImg = screen.getByRole('img', { name: /infant/i });
      expect(infantImg).toBeInTheDocument();
      expect(infantImg).toHaveAttribute('src', '/programs_images/infant.png');
  
    })
    
  });


