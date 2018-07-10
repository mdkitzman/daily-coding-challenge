export function numWays(steps: number) : number {
  return numWaysWindowed(steps);
}

function numWaysRecursive(steps: number) : number {
  if(steps === 0 || steps === 1) return 1;
  return numWaysRecursive(steps - 1) + numWaysRecursive(steps - 2);
}

function numWaysWindowed(steps: number) : number {
  if(steps === 0 || steps === 1) return 1;
  var lastTwo: number[] = [1,1];
  for(let i = 2; i <= steps; i++) {
    const sum = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = sum;
  }
  return lastTwo[1];
}
