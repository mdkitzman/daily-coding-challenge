import { numWays } from './solution';

for(let i = 0; i < 1000; i++) {
  if(i % 10 === 0)
    console.log(`Num Ways for ${i} is ${numWays(i)}`);
}

