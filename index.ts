import * as yargs from 'yargs';
import { readdirSync, readFileSync } from 'fs';
import { IChallenge } from './types';
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

const argv = (yargs as any).array('challenges').argv;

const challenges = readdirSync('./challenges');

const {
  challenge,
  readme,
  name 
 } = challenges
  .map(name => {
    const readme = readFileSync(`./challenges/${name}/README.md`, 'utf8');
    const challenge: IChallenge = require(`./challenges/${name}`).challenge;
    return { challenge, readme, name };
  })
  .find(payload => {
    return payload.name === argv.challenge;
  });

if(challenge) {
  if(argv.v || argv.verbose) {
    console.log(marked(readme));
  }
  console.log(`Executing challenege ${name}`);

  challenge.execute();
} else {
  console.log('Unable to find a matching challenege');
}
