# The Problem

Two strings are anagrams if they are permutations of each other. For example,
"aaagmnrs" is an anagram of "anagrams". 
Given an array of strings, remove each string that is an anagram of an earlier
string, then return the remaining array in sorted order.

 
## Example

For example, given the strings `s = ['code', 'doce', 'ecod', 'framer', 'frame']`,
the strings `'doce'` and `'ecod'` are both anagrams of `'code'` so they are removed
from the list. The words `'frame'` and `'framer'` are not anagrams due to the extra
`'r'` in `'framer'`, so they remain. The final list of strings in alphabetical
order is `['code', 'frame', 'framer']`.

## Details

Write a function `filterAnagrams` that will take an array of strings and return a new
array of strings.

```typscript
filterAnagrams(input: string[]) : string[]
```