export function filterAnagrams(input: string[]) : string[] {
  const anagrams = [];
  input.forEach( word => {
    if(hasAnagram(anagrams, word)) return;
    anagrams.push(word);
  });
  return anagrams.sort();
};

const hasAnagram = (anagrams: string[], word: string): boolean => {
  return anagrams
    .map(anagramWord => isAnagram(anagramWord, word))
    .reduce((prev, curr) => prev || curr, false);
}

const isAnagram = (word1: string, word2: string): boolean => {
  const ltr1 = String(word1.split('').sort());
  const ltr2 = String(word2.split('').sort());
  return ltr1 == ltr2;
}
