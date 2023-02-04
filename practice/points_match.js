function points(games) {
  return games.reduce((total, score) => {
    total += score[0] == score[2] ? 1 : score[0] > score[2] ? 3 : 0;
    return total;
  }, 0);
  //   return games.reduce((total, score) => {
  //     score.split(":")[0] === score.split(":")[1]
  //       ? (score = 1)
  //       : score.split(":")[0] > score.split(":")[1]
  //       ? (score = 3)
  //       : (score = 0);
  //     total += Number(score);
  //     return total;
  //   }, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
