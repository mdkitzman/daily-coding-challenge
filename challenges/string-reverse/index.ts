import { reverse } from './solution';
import { IChallenge } from '../../types';

class StringReverseChallenge implements IChallenge {
  name = 'string-reverse';
  number = 2;
  execute = function () {
    console.log(reverse("Hi There"));
  }
}

export const challenge: IChallenge = new StringReverseChallenge();