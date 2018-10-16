import * as yargs from 'yargs';
import { readdirSync } from 'fs';
import { IChallenge } from './types';

const argv = (yargs as any).array('challenges').argv;

const challenges = readdirSync('./challenges');
const challenegeNumber = Number.parseInt(argv.challengeNumber);
const challengeName = argv.challenge;

const challenge : IChallenge = challenges
  .map(challengeName => {
    const { challenge } = require(`./challenges/${challengeName}`);
    return challenge as IChallenge;
  })
  .find(challenge => {
    return challenge.number === challenegeNumber || challenge.name === challengeName;
  });

if(challenge) {
  console.log(`Executing challenege ${challenge.name}`);
  challenge.execute();
} else {
  console.log('Unable to find a matching challenege');
}