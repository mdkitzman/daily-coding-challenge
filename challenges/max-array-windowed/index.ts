import { IChallenge } from "../../types";
import { maxWindowed } from './solution';

class WindowedArray implements IChallenge {
  execute = function () {
    [
      {
        data: [10, 5, 2, 7, 8 , 7],
        kWindow: 3
      },
      {
        data: [10, 5, 2, 7, 8 , 7],
        kWindow: 4
      },
      {
        data: [10, 5, 2, 7, 8 , 7],
        kWindow: 5
      }
    ]
      .forEach(input => {
        const {data, kWindow} = input;
        const results = maxWindowed(kWindow, data);
        console.log(`For data [${data}] with a window ${kWindow}, the result is [${results}]`);
      });

  }
}

export const challenge = new WindowedArray();
