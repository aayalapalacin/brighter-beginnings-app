import React from 'react';
import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClassDojo from '../../ClassDojo/ClassDojo'; 


describe('ClassDojo component rendering', () => {
  test("renders ClassDojo ", () => {
    render(
          <ClassDojo  />
    );

    expect(screen.getByTestId('class-dojo')).toBeInTheDocument();

  });
}
);


describe("video rendering in class dojo component",()=>{
  test("rendering class dojo video",()=>{

    render(
        <ClassDojo  />
    );
    const classDojoVideo = screen.getByTitle('YouTube video player');
    expect(classDojoVideo).toBeInTheDocument();
    expect(classDojoVideo).toHaveAttribute('src', 'https://www.youtube.com/embed/oufeciODPuo?si=7Bij7d8mLSd03Bus');
    expect(classDojoVideo).toHaveClass('class-dojo-video');
    expect(classDojoVideo).toHaveAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    expect(classDojoVideo).toHaveAttribute('referrerPolicy', 'strict-origin-when-cross-origin');
    expect(classDojoVideo).toHaveAttribute('allowFullScreen');
  
    })
    
  });


