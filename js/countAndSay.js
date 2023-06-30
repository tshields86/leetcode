/* https://leetcode.com/problems/count-and-say/ */

/*
The count - and - say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n - 1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit.Then for each substring, say the number of digits, then say the digit.Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count - and - say sequence.

Input: n = 1
Output: "1"
Explanation: This is the base case.

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
*/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  let currString = '1';
  for (let i = 2; i <= n; i++) {
    let nextString = '';
    for (let j = 0, count = 1; j < currString.length; j++) {
      const char = currString[j];
      if (char === currString[j + 1]) {
        count++;
      } else {
        nextString += `${count}${char}`;
        count = 1;
      }
    }
    currString = nextString;
  }
  return currString;
};

const countAndSayRecursive = n => {
  if (n === 1) return '1';
  const prevString = countAndSayRecursive(n - 1);
  let string = '';
  for (let i = 0, count = 1; i < prevString.length; i++) {
    const char = prevString[i];
    if (char === prevString[i + 1]) {
      count++;
    } else {
      string += `${count}${char}`;
      count = 1;
    }
  }
  return string;
};
