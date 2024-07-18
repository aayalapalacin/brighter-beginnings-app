// src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgramsInfo from '../ProgramsInfo'; 
import { Context } from '../../../../store/appContext';
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

describe('Programs component rendering', () => {
  test("renders Home component and it's sub components", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <ProgramsInfo />
        </Context.Provider>
      </BrowserRouter>
    );


    expect(screen.getByTestId('programs-info')).toBeInTheDocument();

    expect(screen.getByTestId('submit-form')).toBeInTheDocument();

  });
}
);


describe("images rendering in programs info component",()=>{
  test("rendering backpack imge",()=>{

    render(
      <BrowserRouter>
            <Context.Provider value={mockContextValue}>
          <ProgramsInfo />
        </Context.Provider>
      </BrowserRouter>
    );

    const backpackImg = screen.getAllByRole('img', { name: /Backpack/i });
    backpackImg.forEach((img)=>{
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/home_images/backpack.webp');
  
    })
    
  });
})
