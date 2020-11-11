/* https://leetcode.com/problems/partition-labels/ */

/* 
A string s of lowercase English letters is given. We want to partition this string
into as many parts as possible so that each letter appears in at most one part, and
return a list of integers representing the size of these parts.

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
*/

const partitionLabels = s => {
  const result = [];

  const lastIndex = new Map();
  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s.charAt(i), i);
  }

  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const currEnd = lastIndex.get(s.charAt(i));
    end = Math.max(end, currEnd);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};