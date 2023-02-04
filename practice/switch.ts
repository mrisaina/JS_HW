export function quarterOf(month: number): number {
  const quarterOf = (month: number) => {
    switch (true) {
      case 1 <= month && month <= 3: {
        return 1;
      }
      case 4 <= month && month <= 6: {
        return 2;
      }
      case 7 <= month && month <= 9: {
        return 3;
      }
      case 10 <= month && month <= 12: {
        return 4;
      }
      default:
        return -1;
    }
  };
  return quarterOf(month);
}

console.log(quarterOf(1));
console.log(quarterOf(7));
