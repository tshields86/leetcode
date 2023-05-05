/* https://leetcode.com/problems/house-robber/ */


const rob = nums => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prevMax = 0;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    let newMax = Math.max(currentMax, prevMax + nums[i])
    console.log({ num: nums[i], prevMax, currentMax, newMax})
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax;
};