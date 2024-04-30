import * as yargs from 'yargs';
import { readdirSync, readFileSync } from 'fs';
import { IChallenge, IChallengeInfo, ChallengeAction } from './types';
import { marked } from 'marked';
import { markedTerminal } from 'marked-terminal';

const readlineSync = require('readline-sync');

marked.setOptions({
  // Define custom renderer
  renderer: new markedTerminal()
});

const argv = (yargs as any).array('challenges').argv;

const challenges = readdirSync('./challenges');

const challengeInfos: IChallengeInfo[] = challenges
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
};
const requestNextChallenge = () : IChallengeInfo => {
  const index = readlineSync.keyInSelect(challengeInfos.map(option => option.name), 'Please select a challenge to execute.');
  return index > -1 ? 
    challengeInfos[index] :
    undefined;
}
const executeChallenge = (challenge: IChallengeInfo) => {
  challenge.challenge.execute(argv);
};
const showReadme = (challenge: IChallengeInfo) => {
  console.log(marked.parse(challenge.readme));
};

// Execution loop.

let challengeInfo: IChallengeInfo = undefined;
while(challengeInfo = requestNextChallenge()) {

  const choice : string = readlineSync.question('What would you like to do?  ', actionLimit);
  
  switch(ChallengeAction[choice.toUpperCase()]) {
    case ChallengeAction.EXECUTE:
      executeChallenge(challengeInfo);
      break;
    case ChallengeAction.README:
    default:
      showReadme(challengeInfo);
      break;
  }
}
console.log('See you later!');

