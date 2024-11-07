function countWordOccurrences(sentence: string, word: string): number {
  let count = 0;
  let arr = sentence.toLowerCase().split(" ");
  const compareWord = word.toLowerCase();

  for (const item of arr) {
    if (item === compareWord) {
      count++;
    }
  }
  return count;
}

// console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// );
