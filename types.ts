export type IChallenge = {
  name: string,
  number: number,
  problemStatement?: string,
  execute: Function
};