let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

// по имени (Ann, John, Pete)
users.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
console.log(users);

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
//   }

// // по возрасту (Pete, Ann, John)

// users.sort(byField("name"));
// users.sort(byField("age"));
