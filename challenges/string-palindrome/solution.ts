export function containsPalindrome(text: string) : boolean {
  let queue = [];
  Array.from(text)
    .sort()
    .forEach((letter) => {
      if(queue.indexOf(letter) === -1)
        queue.push(letter);
      else
        queue.pop();
    });
  return queue.length < 2;
}


