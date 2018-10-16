import { numWays } from './solution';
import { IChallenge } from '../../types';

class StairStepChallenge implements IChallenge {

  execute = function () {
    for(let i = 0; i < 1000; i++) {
      if(i % 10 === 0)
        console.log(`Num Ways for ${i} is ${numWays(i)}`);
    }
  }
  
}

export const challenge: IChallenge = new StairStepChallenge();
