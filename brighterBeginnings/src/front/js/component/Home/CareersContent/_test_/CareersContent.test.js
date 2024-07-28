import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CareersContent from '../CareersContent'; 
import { BrowserRouter,MemoryRouter, Routes, Route } from "react-router-dom";


describe('Careers component rendering', () => {
  test("renders Careers component ", () => {
    render(
      <BrowserRouter>
          <CareersContent />
      </BrowserRouter>
    );


    expect(screen.getByTestId('careers-content')).toBeInTheDocument();


  });
}
);


describe("images rendering in careers content component",()=>{
  test("rendering blocks imge",()=>{

    render(
      <BrowserRouter>
          <CareersContent />
      </BrowserRouter>
    );
    

    const blockImage = screen.getByRole('img', { name: /blocks/i });
      expect(blockImage).toBeInTheDocument();
      expect(blockImage).toHaveAttribute('src', '/home_images/abc_block.webp');
    
  });
})


describe("Career Content Link", () => {
  test("onClick a tag navigates", () => {
      render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<CareersContent />} />
            </Routes>
        </MemoryRouter>
      );
      const careersLink = screen.getByTestId('google-form-link');
      expect(careersLink).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSdNd-QZ7aDwPNJqG575EkBNh3eUl3Xt3AMUfW7xZE16Ano6Ww/viewform?usp=sf_link');
      expect(careersLink).toHaveAttribute('target', '_blank');

    
 });
});


