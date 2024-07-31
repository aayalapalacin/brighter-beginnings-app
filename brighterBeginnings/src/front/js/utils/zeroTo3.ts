
export const zeroTo3 = (currentState: number) => {
    // assuming we want to cycle between 4 options
          //    X    Y   Iteration
         
          //    0 |  1 |  0
          //    1 |  2 |  1
          //    2 |  3 |  2
          //    3 |  0 |  3
          //    4 |  0 |  0
          //    5 |  0 |  1
          //    6 |  0 |  2

    if (currentState + 1 < 4) {
      return currentState + 1;
    } else {
      return 0;
    }
  };