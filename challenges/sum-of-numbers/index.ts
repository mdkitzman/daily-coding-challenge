import { sumExists } from './solution';
import { IChallenge } from '../../types';

class SumOfNumbersChallenge implements IChallenge {

  maxLarge = 1000000;
  name = 'sum-of-numbers';
  number = 3;

  execute = () => {
    [
      {
        sumNumber: 17,
        array: [10, 15, 3, 7]
      },
      {
        sumNumber: 0,
        array: [10, 15, 3, 7]
      },
      {
        sumNumber: 0,
        array: [10, 15, 3, -3]
      },
      {
        sumNumber: -10,
        array: [10, 15, 3, -13]
      },
      {
        sumNumber: this.maxLarge + this.maxLarge-1,
        array: Array.from(new Array(this.maxLarge),(val,index)=>index+1)
      },
      {
        sumNumber: 1,
        array: []
      },
      {
        sumNumber: 1,
        array: [1]
      }
    ].forEach((item) => {
      const { array, sumNumber } = item;
      const mayOrMayNot = sumExists(sumNumber, array) ?
        'does' :
        'does not';
      const arrayStr = array.length < 5 ?
        array.toString() :
        `${array[0]}, ${array[1]}, ... , ${array[array.length-2]}, ${array[array.length-1]}`;
      console.log(`The array [${arrayStr}] ${mayOrMayNot} contain the sum number of ${sumNumber}`);
    });
    
  }

}

export const challenge: IChallenge = new SumOfNumbersChallenge();



