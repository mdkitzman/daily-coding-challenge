export function maxWindowed(k: number, numbers: number[]) : number[] {
  let results = [];
  for(let i = 0; i < numbers.length - k+1; i++) {
    results.push(Math.max(...numbers.slice(i, i+k)));
  }
  return results;
}
