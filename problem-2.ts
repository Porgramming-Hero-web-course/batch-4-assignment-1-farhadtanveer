function removeDuplicates(arr: number[]): number[] {
  let final: number[] = [];
  for (const num of arr) {
    if (final.includes(num) === false) {
      final.push(num);
    }
  }
  return final;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
