function drawStairs(n) {
  let res;
  res = [...Array(n)]
    .map((el, idx) => {
      return (el = " ".repeat(idx) + "I");
    })
    .join("\n");
}

drawStairs(10);
