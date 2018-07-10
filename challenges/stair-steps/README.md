# The Problem

You are given a staircase with `N` steps (`N` will be a non-negative integer), and you
are told that you can ascend the staircase taking 1 or 2 steps at a time, **how many
different ways** are there to ascend the stair case?

## Example

Given a stair case with 2 steps, how many ways are there to ascend the staircase taking
1 or 2 steps at a time

The Stair Case
```
2            __
1         __|
start  __|
```

Here, your function should return 2 since you can ascend one stair at a time, or take 
2 steps at one time, so the only two paths up the stairs are `{[1,2], [2]}`.

## Details

Write a function `numWays` that will take a non-negative integer and return a
non-negative number of ways to ascend the staircaise taking 1 or 2 steps.

```typscript
numSteps(steps: Number) : Number
```

## Variation

Write a function `numWays` that will take a non-negative integer and a set of positive
integers representing the number of steps that you could take.  This is the same function
as before, but instead of a fixed set of 1 or 2 steps, it could be any set of number of
steps.
