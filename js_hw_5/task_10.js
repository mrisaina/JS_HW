import users from "./fixture/users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((skillsGen, { skills }) => skillsGen.concat(...skills), [])
    .sort()
    .filter((skill, i, arr) => arr.indexOf(skill) === i);

  // users
  //   .map(({ skills }) => skills)
  //   .forEach((item) => {
  //     item.forEach((skill) => {
  //       skills.push(skill);
  //     });
  //   });

  // skills.sort();

  // return skills.filter((skill, i, arr) => arr.indexOf(skill) === i);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
