const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) return false;
  return true;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Error! Login should be from 4 to 16 characters!";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "This login is already used!";
  } else {
    logins.push(login);
    return "Login successfully added!";
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
