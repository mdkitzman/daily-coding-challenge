import * as yargs from 'yargs';
import { readdirSync, readFileSync } from 'fs';
import { IChallenge, IChallengeInfo, ChallengeAction } from './types';
const readlineSync = require('readline-sync');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

const argv = (yargs as any).array('challenges').argv;

const challenges = readdirSync('./challenges');

const challengeOptions: IChallengeInfo[] = challenges
  .map(name => {
    const readme = readFileSync(`./challenges/${name}/README.md`, 'utf8');
    const challenge: IChallenge = require(`./challenges/${name}`).challenge;
    return { challenge, readme, name };
  });
const actionLimit = {
  limit: input => {
    return (input || '') === ChallengeAction[ChallengeAction.EXECUTE].toString().toLowerCase() || 
           (input || '') === ChallengeAction[ChallengeAction.README].toString().toLowerCase()
  },
  limitMessage: 'Please type \'execute\' or \'readme\''
}
let challengeIndex = -1;
while((challengeIndex = readlineSync.keyInSelect(challengeOptions.map(option => option.name), 'Please select a challenge to execute.')) >= 0) {
  const choice : string = readlineSync.question('What would you like to do?  ', actionLimit);
  
  switch(ChallengeAction[choice.toUpperCase()]) {
    case ChallengeAction.EXECUTE:
      challengeOptions[challengeIndex].challenge.execute()
      break;
    case ChallengeAction.README:
    default:
      console.log(marked(challengeOptions[challengeIndex].readme));
      break;
  }
}
console.log('See you later!');
