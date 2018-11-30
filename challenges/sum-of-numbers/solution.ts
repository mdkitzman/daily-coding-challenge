export function sumExists(sumNumber: number, candidates: number[]) : boolean {
  if(candidates.length < 2)
    return false;
  return pivot(sumNumber, candidates);
}

function pivot(sumNumber: number, candidates: number[]) : boolean {
  // Adapted from https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/
  const iPivot = candidates.findIndex((value, i, arr) => i < arr.length - 1 && value > arr[i + 1]); 
  
  let minCursor = cursorFor(candidates)(iPivot + 1);
  let maxCursor = cursorFor(candidates)(iPivot);
 
  while (!minCursor.equals(maxCursor)) {
    const pairSum = minCursor.value + maxCursor.value;
    if (pairSum == sumNumber) return true; 
    
    (pairSum < sumNumber)
        ? minCursor.moveNext()
        : maxCursor.movePrev(); 
  } 
  return false; 
}

function oneLoop(sumNumber: number, candidates: number[]) : boolean {
  let i = 0;
  let j = candidates.length - 1;
  candidates.sort();
  while(i < j) {
    if(candidates[i] + candidates[j] === sumNumber) 
      return true;
    (candidates[i] + candidates[j] < sumNumber)
      ? i++
      : j--;
  }
  return false;
}

function twoLoops(sumNumber: number, candidates: number[]) : boolean {
  
  for(let i = 0; i < candidates.length - 1; i++) {
    for(let j = i + 1; j < candidates.length; j++) {
      if(candidates[i] + candidates[j] === sumNumber)
        return true;
    }
  }
  return false;
}

function cursorFor(data: any[]): (index: number) => Cursor<number> {
  return (index: number) : Cursor<number> => {
    let iCursor = index < 0 
      ? (index % data.length) + data.length
      : (index % data.length);
    return {
      get index() { return iCursor; },
      get value() { return data[iCursor]; },
      moveNext: () => { iCursor = (iCursor + 1) % data.length; },
      movePrev: () => { iCursor = (!!iCursor ? iCursor : data.length) - 1 },
      equals: (other: Cursor<number>) => { return iCursor == other.index; }
    };
  }
}

declare class Cursor<T> {
  index: number;
  value: T;
  moveNext(): void;
  movePrev(): void;
  equals(other:Cursor<T>): boolean;
};
