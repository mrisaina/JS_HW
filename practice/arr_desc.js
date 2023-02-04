function sumOfDifferences(arr) {
  if (arr.length < 2) return 0;
  return arr
    .sort((a, b) => b - a)
    .reduce((total, el, idx, arr) => {
      idx === arr.length - 1
        ? total
        : (total += Number(arr[idx]) - Number(arr[idx + 1]));
      return total;
    }, 0);

  //   return arr.reverse().reduce((total, el, idx, arr) => {
  //     idx === arr.length - 1 ? total : (total += el);
  //     return total;
  //   }, 0);
}
console.log(sumOfDifferences([20, -5, -1, -2, 4, 2, 26, 8, 26, 5, -14]));
// console.log(sumOfDifferences([-3, -2, -1]));
// console.log(sumOfDifferences([]));
// console.log(sumOfDifferences([-3]));
