/* https://leetcode.com/problems/design-phone-directory/ */

/*
Design a phone directory that initially has maxNumbers empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

Implement the PhoneDirectory class:

PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
int get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
bool check(int number) Returns true if the slot number is available and false otherwise.
void release(int number) Recycles or releases the slot number.

Input
["PhoneDirectory", "get", "get", "check", "get", "check", "release", "check"]
[[3], [], [], [2], [], [2], [2], [2]]
Output
[null, 0, 1, true, 2, false, null, true]

Explanation
PhoneDirectory phoneDirectory = new PhoneDirectory(3);
phoneDirectory.get();      // It can return any available phone number. Here we assume it returns 0.
phoneDirectory.get();      // Assume it returns 1.
phoneDirectory.check(2);   // The number 2 is available, so return true.
phoneDirectory.get();      // It returns 2, the only number that is left.
phoneDirectory.check(2);   // The number 2 is no longer available, so return false.
phoneDirectory.release(2); // Release number 2 back to the pool.
phoneDirectory.check(2);   // Number 2 is available again, return true.
*/

/**
 * @param {number} maxNumbers
 */
class PhoneDirectory {
  constructor(maxNumbers) {
    this.len = maxNumbers;
    this.set = new Set();
    while (maxNumbers--) this.set.add(maxNumbers);
  }

  /**
   * @return {number}
   */
  get() {
    if (this.set.size === 0) return -1;
    const num = this.set.values().next().value;
    this.set.delete(num);
    return num;
  };

  /** 
   * @param {number} number
   * @return {boolean}
   */
  check(number) {
    return this.set.has(number);
  };

  /** 
   * @param {number} number
   * @return {void}
   */
  release(number) {
    if (number >= 0 && number <= this.len) {
      this.set.add(number);
    }
  };
}

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
