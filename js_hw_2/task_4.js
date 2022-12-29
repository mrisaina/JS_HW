const formatString = function (string) {
  const charactersAmount = string.split("").length;
  let res;
  if (charactersAmount > 40) {
    let newStr = string.split("").slice(0, 40);
    newStr[newStr.length] = "...";
    res = newStr.join("");
  } else {
    res = string;
  }
  return res;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// повернеться форматований рядок
