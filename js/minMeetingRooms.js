/* https://leetcode.com/problems/meeting-rooms-ii/ */

/* 
Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Input: [[7,10],[2,4]]
Output: 1
*/

const ascSort = (a, b) => a - b;

const minMeetingRooms = intervals => {
  const length = intervals.length;
  // Split start and end times into separate arrays
  const startTimes = new Array(length);
  const endTimes = new Array(length);

  intervals.forEach(([sTime, eTime], i) => {
    startTimes[i] = sTime;
    endTimes[i] = eTime;
  });

  // Sort times
  startTimes.sort(ascSort);
  endTimes.sort(ascSort);

  // Iterate over times keeping track of current rooms uses and total rooms used
  let sPoint = 0;
  let ePoint = 0;
  let totalRooms = 0;
  let currRooms = 0;

  while (sPoint < length) {
    if (startTimes[sPoint] < endTimes[ePoint]) {
      sPoint++;
      currRooms++;
      totalRooms = Math.max(totalRooms, currRooms);
    } else {
      ePoint++;
      currRooms--;
    }
  }

  return totalRooms;
};
