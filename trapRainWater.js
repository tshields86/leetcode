/* https://leetcode.com/problems/trapping-rain-water/ */

/* 
Given n non-negative integers representing an elevation map
where the width of each bar is 1, compute how much water it
can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section)
are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9
*/

const trapRainWater = heights => {
  let water = 0;
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (leftIdx < rightIdx) {
    const left = heights[leftIdx];
    const right = heights[rightIdx];
    if (left < right) {
      if (left >= leftMax) leftMax = left;
      else water += leftMax - left;
      leftIdx++;
    } else {
      if (right >= rightMax) rightMax = right;
      else water += rightMax - right;
      rightIdx--;
    }
  }

  return water;
};