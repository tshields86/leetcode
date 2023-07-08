/* https://leetcode.com/problems/design-browser-history/ */

/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]
*/

class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.history = [homepage];
    this.curr = 0;
    this.last = 0;
  }

  /** 
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.last = ++this.curr;
    this.history[this.curr] = url;
  }

  /** 
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    this.curr = Math.max(0, this.curr - steps);
    return this.history[this.curr];
  }

  /** 
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    this.curr = Math.min(this.last, this.curr + steps);
    return this.history[this.curr];
  }
}

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
