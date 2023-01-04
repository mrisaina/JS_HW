const findBestEmployee = function (employees) {
  let max = Object.values(employees)[0];
  let maxIndex = 0;
  for (let i = 0; i < Object.values(employees).length; i += 1) {
    if (Object.values(employees)[i] > max) {
      maxIndex = i;
    }
  }
  return Object.keys(employees)[maxIndex];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
