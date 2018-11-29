import { traverseGrid } from './solution';
import { IChallenge } from '../../types';

class GridTraversalChallenge implements IChallenge {

  execute = function () {
    [
      {
        data: [[0]],
        expected: 1
      },
      {
        data: [[0, 0, 1],
               [0, 0, 0],
               [1, 0, 0]],
        expected: 4
      },
      {
        data: [[0, 0, 1],
               [0, 0, 1],
               [1, 0, 0]],
        expected: 2
      }
    ]
    .forEach((input) => {
      const { data, expected } = input;
      
      console.time('grid traversal');
      const numWays = traverseGrid(data);
      console.timeEnd('grid traversal');

      console.log(`${expected === numWays ?'✔ - success!':'X - failure!'}\n`);
    });
  }
  
}

export const challenge: IChallenge = new GridTraversalChallenge();
