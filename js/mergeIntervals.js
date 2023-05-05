/* https://leetcode.com/problems/merge-intervals/ */

/* 
Given an array of intervals where intervals[i] = [starti, endi],
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

const mergeIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  const len = intervals.length;
  const merged = [];
  let [low, high] = intervals[0];

  for (const [currLow, currHigh] of intervals) {
    if (currLow > high) {
      merged.push([low, high]);
      low = currLow;
      high = currHigh;
    } else if (currHigh > high) {
      high = currHigh;
    }
  }
  merged.push([low, high]);

  return merged;
};