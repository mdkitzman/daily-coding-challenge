import { IChallenge } from "../../types";

class WindowedArray implements IChallenge {
  number = 12;
  name = 'Windowed Array';
  execute = function () {}
}

export const challenge = new WindowedArray();