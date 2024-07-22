import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubmitForm from '../SubmitForm'; 
import { Context } from '../../../../store/appContext';
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";
import Programs from '../../../../pages/programs';
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
  },
  actions: {
    // mock any necessary actions here
  },
};

describe('SubmitForm component rendering', () => {
  test("renders SubmitForm component ", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <SubmitForm />
        </Context.Provider>
      </BrowserRouter>
    );



    expect(screen.getByTestId('submit-form')).toBeInTheDocument();

  });
}
);


describe("SubmitForm Link", () => {
  test("onClick All Programs to program page working", () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Context.Provider value={mockContextValue}>
            <Routes>
              <Route path="/" element={<SubmitForm />} />
              <Route path="/programs" element={<Programs />} />
            </Routes>
          </Context.Provider>
        </MemoryRouter>
      );
      const allProgramsButton = screen.getByTestId('all-programs-submit');
      fireEvent.click(allProgramsButton);
    
      expect(screen.getByTestId('programs')).toBeInTheDocument();
    
 });
});

