import { largestArea } from './solution';
import { IChallenge } from '../../types';
import { arrayStr } from '../../util/helpers';

class ArrayProductChallenge implements IChallenge {
  
  execute = function () {
    [
      {
        histogram: [1, 2, 3, 4, 5],
        expectedSize: 9
      },
      {
        histogram: [3,2,1,],
        expectedSize: 4
      },
      {
        histogram: [1, 3, 2, 5],
        expectedSize: 6
      },
      {
        histogram: [1, 20],
        expectedSize: 20
      },
    ].forEach((input) => {
      const {histogram, expectedSize} = input;
      const largestAreaOfHistogram = largestArea(histogram);
      const match = expectedSize === largestAreaOfHistogram ? "✔" : "❌";
      console.log(`${match} The histogram ${arrayStr(histogram)} has a largest area of ${largestAreaOfHistogram} and expected ${expectedSize}`);
    });
  }

}

export const challenge: IChallenge = new ArrayProductChallenge();
