import React from 'react';
import {  render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayLearnAreas from "../../PlayLearnAreas/PlayLearnAreas"

import {zeroTo3} from "../../../../utils/zeroTo3";
import {zeroToNegative3} from  "../../../../utils/zeroToNegative3"

describe('PlayLearnAreas component rendering', () => {
  test("renders PlayLearnAreas ", () => {
    render(
        <PlayLearnAreas />
    );
    expect(screen.getByTestId('play-and-learn')).toBeInTheDocument();

  });
}
);
      
describe("zeroTo3 and zeroToNegative",()=>{
  test("zeroTo3 return correct values",()=>{
    expect(zeroTo3(0)).toBe(1);
    expect(zeroTo3(1)).toBe(2);
    expect(zeroTo3(2)).toBe(3);
    expect(zeroTo3(3)).toBe(0);
    expect(zeroTo3(4)).toBe(0);
    expect(zeroTo3(5)).toBe(0);
    expect(zeroTo3(6)).toBe(0);
  })


  test("zeroToNegative3 return correct values",()=>{
    expect(zeroToNegative3(0)).toBe(-1);
    expect(zeroToNegative3(-1)).toBe(-2);
    expect(zeroToNegative3(-2)).toBe(-3);
    expect(zeroToNegative3(-3)).toBe(0);
  })
})
