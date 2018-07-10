# The Problem

Given an array of integers, return a new array such that each element at index i
of the new array is the product of all the numbers in the original array
except the one at i.

## Example

Given the input `[1, 2, 3, 4, 5]`, the expected output would be
`[120, 60, 40, 30, 24]`.

If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

## Details

Write a function `arrayProduct` that will take an array of numbers and return a new
array of numbers.

```typscript
arrayProduct(input: number[]) : number[]
```

## Variation

Can it be done without division?
