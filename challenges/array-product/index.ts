import { arrayProduct } from './solution';
import { IChallenge } from '../../types';
import { arrayStr } from '../../util/helpers';

class ArrayProductChallenge implements IChallenge {
  
  execute = function () {
    [
      [1, 2, 3, 4, 5],
      [3,2,1,],
      [10, 15, 3, 7],
      [10, 15, 3, -3],
      [10, 15, 3, -13],
      [],
      [1],
      [1,2,3,4,5,0],
      [0.1, 0.2, 0.3, 0.4],
      [0, 0, 1, 0,]
    ].forEach((input) => {
      const products = arrayProduct(input);
      console.log(`The array ${arrayStr(input)} result is ${arrayStr(products)}`);
    });
  }

}

export const challenge: IChallenge = new ArrayProductChallenge();
