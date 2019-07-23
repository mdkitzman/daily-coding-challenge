import { filterAnagrams } from './solution';
import { IChallenge } from '../../types';

class ArrayProductChallenge implements IChallenge {
  
  execute = function () {
    [
      [
        ['poke','pkoe','okpe','ekop'],
        ['poke']
      ],
      [
        ['code','aaagmnrs','anagrams','doce'],
        ['aaagmnrs','code']
      ]
    ].forEach((data) => {
      const input = data[0];
      const solution = data[1];
      const result = filterAnagrams(input);
      const isEqual = String(solution) == String(result);
      console.log(`${isEqual ?'✔ - success!':'X - failure!'} The results ${isEqual ? 'match' : 'do not match'} the solution`);
    });
  }

}

export const challenge: IChallenge = new ArrayProductChallenge();
