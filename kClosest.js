/* https://leetcode.com/problems/k-closest-points-to-origin/ */

/* 
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique
(except for the order that it is in.)

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
*/

// const getEuclidean = (a, b = [0, 0]) => {
//   return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
// };

// const kClosest = (points, K) => {
//   return points
//     .map(point => [getEuclidean(point), point])
//     .sort((a, b) => a[0] - b[0])
//     .map(([, point]) => point)
//     .slice(0, K)
// };

const getDist = (point) => {
  return point[0] * point[0] + point[1] * point[1];
};

const kClosest = (points, K) => {
  const dists = [];
  points.forEach(point => {
    dists.push(getDist(point));
  });

  dists.sort((a, b) => a - b);

  const distK = dists[K - 1];

  const result = [];
  points.forEach(point => {
    if (getDist(point) <= distK) result.push(point);
  });

  return result;
};