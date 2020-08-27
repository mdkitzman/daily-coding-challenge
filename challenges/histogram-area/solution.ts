export function largestArea(input: number[]) : number {
  return largestAreaAtPos(input, 0);
};

function largestAreaAtPos(input: number[], pos: number): number {
  if (pos === input.length - 1) return input[pos];
  const thisArea = bestAreaAtPos(input, pos);
  return Math.max(thisArea, largestAreaAtPos(input, pos+1));
}

function bestAreaAtPos(input: number[], pos: number){
  let maxArea = 0;
  for (let height = input[pos]; height>0;height--) {
    // Find the longest width at this height, starting at this position in the array
    let width = 0;
    for (let iPos = pos; iPos < input.length && input[iPos] >= height; iPos++, width++) {}
    maxArea = Math.max(maxArea, width * height);
  }
  return maxArea;
}