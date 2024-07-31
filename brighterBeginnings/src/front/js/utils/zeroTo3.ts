
export const zeroTo3 = (currentState: number) => {
    // function to make sure carousel slide index stays within [0] and [3]
    // in other words the index starts at 0, if you continulously click to the right the sequence will be:
    // 0,1,2,3, 0,1,2,3, 0,1,2,3 etc
    if (currentState + 1 < 4) {
      return currentState + 1;
    } else {
      return 0;
    }
  };