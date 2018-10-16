import { reverse } from './solution';
import { IChallenge } from '../../types';

class StringReverseChallenge implements IChallenge {
  execute = function () {
    console.log(reverse("Hi There"));
  }
}

export const challenge: IChallenge = new StringReverseChallenge();
