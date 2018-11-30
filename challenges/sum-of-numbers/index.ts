import { sumExists } from './solution';
import { IChallenge } from '../../types';

class SumOfNumbersChallenge implements IChallenge {

  maxLarge = 1000000;

  execute = () => {
    [
      {
        sumNumber: 17,
        array: [10, 15, 3, 7],
        expected: true
      },
      {
        sumNumber: 0,
        array: [10, 15, 3, 7],
        expected: false
      },
      {
        sumNumber: 0,
        array: [10, 15, 3, -3],
        expected: true
      },
      {
        sumNumber: -10,
        array: [10, 15, 3, -13],
        expected: true
      },
      {
        sumNumber: this.maxLarge + this.maxLarge-1,
        array: Array.from(new Array(this.maxLarge),(val,index)=>index+1),
        expected: true
      },
      {
        sumNumber: 1,
        array: [],
        expected: false
      },
      {
        sumNumber: 1,
        array: [1],
        expected: false
      }
    ].forEach((item) => {
      const { array, sumNumber, expected } = item;
      const arrayStr = array.length < 5 ?
        array.toString() :
        `${array[0]}, ${array[1]}, ... , ${array[array.length-2]}, ${array[array.length-1]}`;

      const msg = `sumExists of array length ${array.length} took`;

      console.time(msg)
      const exists = sumExists(sumNumber, array);
      console.timeEnd(msg);

      console.log(`${expected === exists ?'✔':'X'} - The array [${arrayStr}] ${exists?'does':'does not'} contain the sum number of ${sumNumber}\n`);
    });
    
  }

}

export const challenge: IChallenge = new SumOfNumbersChallenge();



