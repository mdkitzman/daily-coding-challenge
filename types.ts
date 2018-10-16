export type IChallenge = {
  execute: (args?: any) => void;
};

export type IChallengeInfo = {
  name: string,
  challenge: IChallenge,
  readme: string;
};

export enum ChallengeAction {
  EXECUTE, README
};
