# The Problem

You are given an N by M matrix of 0s and 1s. Starting from the top left corner,
how many ways are there to reach the bottom right corner?

You can only move right and down. 0 represents an empty space while 1 represents
a wall you cannot walk through.

## Example

Given the following matrix:

```
[[0, 0, 1],
 [0, 0, 1],
 [1, 0, 0]]
```

Return two, as there are only two ways to get to the bottom right:

    Right, down, down, right
    Down, right, down, right

The top left corner and bottom right corner will always be 0.

## Details

Write a function `traverseGrid` that will take a two-dimensional array and 
will return the number of ways that the grid can be traversed from top-left
to bottom-right.

```typscript
traverseGrid(grid: number[][]) : number
```
