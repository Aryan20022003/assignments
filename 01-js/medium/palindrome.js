/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const arr = [];
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    arr.push(String.fromCharCode(i));
  }
  const tStr1 = str.toLowerCase().split(" ").join("");
  // console.log(arr);
  let i = 0;
  let j = tStr1.length - 1;
  while (j >= i) {
    if (!arr.includes(tStr1[i])) {
      i++;
      continue;
    }
    if (!arr.includes(tStr1[j])) {
      j--;
      continue;
    }
    if (tStr1[i] != tStr1[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
// isPalindrome('hello');
module.exports = isPalindrome;
