const findLongestWord = function (string) {
    const wordsArr = string.split(" ");
  
    let max = wordsArr[0];
    for (let words of wordsArr) {
      if (words.split("").length > max.split("").length) {
        max = words;
      }
    }
    return max;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
  
  console.log(findLongestWord("Google do a roll")); // 'Google'
  
  console.log(findLongestWord("May the force be with you")); // 'force'
  