/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count=0;
  const newStr=str.toLowerCase().split('');
  const arr=['a','e','i','o','u'];
  newStr.forEach(element => {
    if (arr.includes(element))
    {
      count=count+1;
    }
  });
  return count;
    // Your code here
}

module.exports = countVowels;