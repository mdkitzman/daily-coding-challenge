export function sumExists(sumNumber: number, candidates: number[]) : boolean {
  if(candidates.length < 2)
    return false;
  
  for(let i = 0; i < candidates.length - 1; i++) {
    for(let j = i + 1; j < candidates.length; j++) {
      if(candidates[i] + candidates[j] === sumNumber)
        return true;
    }
  }
  return false;
}
