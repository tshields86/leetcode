/* https://leetcode.com/problems/reverse-integer/ */

/* 
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store
integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0
when the reversed integer overflows.

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

Input: x = 0
Output: 0


num 123
res = 0;

while num > 0

123 % 10 = 3
123 - 3 = 120
120 / 10 = 12
rev = rev * 10 + 3
rev = 3

12 % 10 = 2
12 - 2 = 10
10 / 10 = 1
rev = rev * 10 + 2
rev = 32

1 % 10 = 1
1 - 1 = 0
0 / 10 = 0
rev = rev * 10 + 1
rev = 321
*/

const reverseInteger = x => {
  const MAX_INT = Math.pow(2, 31);
  const sign = Math.sign(x);
  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    const pop = x % 10;
    x = Math.floor(x / 10);

    rev = rev * 10 + pop;
  }

  return rev > MAX_INT ? 0 : rev * sign;
};
