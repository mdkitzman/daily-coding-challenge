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
npm start -- --challenge [challengeName] [-v]
```

The `--challenge` parameter will run a particular challenge which matches a name
for a challenge.

The `-v` parameter will print out the readme associated with the challenge.

### Example

```bash
npm start -- --challenge string-reverse
```

This will run the `string-reverse` challenege.
