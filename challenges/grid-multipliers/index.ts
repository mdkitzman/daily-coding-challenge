import multiplicationFindInstance from './solution';
import { IChallenge } from '../../types';

class MultiplicationFinder implements IChallenge {
  
  execute = function () {
    [
      [6, 12, 4],
      [6, 4, 3],
      [6, 15, 2],
      [6, 1000, 0],
      [1000000, (1000000*1000000), 1],
      [10000000000, 1, 1],
    ].forEach(([gridSize, subject, expected]) => {
      const foundInstances = multiplicationFindInstance(gridSize, subject);
      const match = expected === foundInstances ? "✔" : "❌";
      console.log(`${match}: A grid of size ${gridSize} found ${foundInstances} instances of the number ${subject} with ${expected} expected.`);
    });
  }

}

export const challenge: IChallenge = new MultiplicationFinder();
