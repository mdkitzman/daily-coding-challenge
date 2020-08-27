# The Problem

You are given a histogram consisting of rectangles of different heights. Determine 
the area of the largest rectangle that can be formed only from the bars of the histogram.

## Example

This histogram input `[1, 3, 2, 5]` corresponds to the following diagram:

```
      x
      x  
  x   x
  x x x
x x x x
```

The largest rectangle area would b 6, representing the `2 x 3` area at the bottom right.

## Details

Write a function `largestArea` that will take an array of numbers and return a number representing
the area of the largest rectangle that can be contained in the histogram.

```typscript
largestArea(input: number[]) : number
```