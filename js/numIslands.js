/* https://leetcode.com/problems/number-of-islands/ */

/* 
Given an m x n 2d grid map of '1's (land) and '0's (water),
return the number of islands.

An island is surrounded by water and is formed by connecting
adjacent lands horizontally or vertically. You may assume all
four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

const dfs = (grid, r, c) => {
  const nr = grid.length;
  const nc = grid[0].length;

  if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] === '0') return;

  grid[r][c] = '0';
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
};

const numIslandsDfs = grid => {
  let islandCount = 0;

  const nr = grid.length;
  const nc = grid[0].length;

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        islandCount++;
        dfs(grid, r, c);
      }
    }
  }

  return islandCount;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
    return ++this.size;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const oldHead = this.head;
    if (this.size === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next
      oldHead.next = null;
    }
    this.size--;
    return oldHead.value;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }
};

/* 
[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
*/

const numIslandsBfs = grid => {
  let islandCount = 0;

  const nr = grid.length;
  const nc = grid[0].length;

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === '1') {
        islandCount++;
        grid[r][c] = '0';

        const queue = new Queue();
        queue.enqueue([r, c]);

        while (!queue.isEmpty()) {
          const [r, c] = queue.dequeue();

          if (r - 1 >= 0 && grid[r - 1][c] === '1') {
            queue.enqueue([r - 1, c]);
            grid[r - 1][c] = '0';
          }
          if (r + 1 < nr && grid[r + 1][c] === '1') {
            queue.enqueue([r + 1, c]);
            grid[r + 1][c] = '0';
          }
          if (c - 1 >= 0 && grid[r][c - 1] === '1') {
            queue.enqueue([r, c - 1]);
            grid[r][c - 1] = '0';
          }
          if (c + 1 < nc && grid[r][c + 1] === '1') {
            queue.enqueue([r, c + 1]);
            grid[r][c + 1] = '0';
          }
        }
      }
    }
  }

  return islandCount;
};
