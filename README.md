# Daily Coding Challenge

I have subscribed to the [Daily Coding Problem](https://www.dailycodingproblem.com/) newsletter
to try and keep my brain active and thinking about various problems, kind of like a crossword
puzzle or sodoku.  This is a collection of some of the ones I have attempted.

## Setup

I recommend using `nvm` to install and manage node.js versions.  There is a `.nvmrc` file
that specifies the version of node.js to use.  Run the this via the command line to install
the correct version of node.js

```bash
nvm install <version from .nvmrc>
```

Once installed, run

```bash
nvm use <version from .nvmrc>
```

## Usage

On the command line, run 

```bash
npm start -- [--challenge|--challengeNumber]
```

The `--challenge` or `--challengeNumber` parameters are required if you want to run a particular
challenge.  Specify the `--challenge` with a string matching the name of the challenge to run.
Specify the `--challengeNumber` if you know the number of the challenge to run.

```bash
npm start -- --challenge string-reverse
```

This will run the `string-reverse` challenege.