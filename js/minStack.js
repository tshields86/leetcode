/* https://leetcode.com/problems/min-stack/ */

/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]
*/

class MinStack {
  constructor() {
    this.stack = [];
  }
  /** 
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push([val, Math.min(this.getMin(), val)]);
  };

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  };

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1][0];
  };

  /**
   * @return {number}
   */
  getMin() {
    return this.stack.length ? this.stack[this.stack.length - 1][1] : Infinity;
  };
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
