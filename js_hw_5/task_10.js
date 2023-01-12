import users from "./fixture/users.js";

const getSortedUniqueSkills = (users) => {
  const skills = [];

  users
    .map(({ skills }) => skills)
    .forEach((item) => {
      item.forEach((skill) => {
        skills.push(skill);
      });
    });

  skills.sort();

  return skills.filter((skill, i, arr) => arr.indexOf(skill) === i);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
