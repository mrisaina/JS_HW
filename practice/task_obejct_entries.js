// ==============================
// object enteries

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно объект
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices); // 8

// =============================
// obejct values

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;

// for (let i = 0; i < Object.values(salaries).length; i += 1) {
//   sum += Number(Object.values(salaries)[i]);
// }

// for (let salary of Object.values(salaries)) {
//   sum += salary;
// }

// return Object.values(salaries).reduce((sum, salary) => (sum += salary), 0);

//return sum;
// }

// console.log(sumSalaries(salaries)); // 650

// ==========================================
// couner object props

// let user = {
//   name: "John",
//   age: 30,
//   status: "single",
// };

// function count(obj) {
//   return Object.keys(obj).length;
// }

// console.log(count(user)); // 2
