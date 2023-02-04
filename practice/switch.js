const quarterOf = (month) => {
  let value;
  switch (true) {
    case 1 <= month && month <= 3: {
      value = 1;
      break;
    }
    case 4 <= month && month <= 6: {
      value = 2;
      break;
    }
    case 7 <= month && month <= 9: {
      value = 3;
      break;
    }
    case 10 <= month && month <= 12: {
      value = 4;
      break;
    }
    default:
      value = "not a month";
      break;
  }
  return value;
};

quarterOf(2);
console.log(quarterOf(2));
console.log(quarterOf(4));
console.log(quarterOf(7));
console.log(quarterOf(10));
