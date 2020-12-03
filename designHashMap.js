/* https://leetcode.com/problems/design-hashmap/ */

/* 
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)
*/

class MyHashMap {
  constructor(length = 100) {
    this.map = new Array(length);
    this.size = 0;
  }

  put(key, value) {
    const idx = this.hash(key);
    if (!this.map[idx]) this.map[idx] = [];
    const pair = [key, value];

    for (let i = 0; i < this.map[idx].length; i++) {
      const [storedKey] = this.map[idx][i];
      if (storedKey === key) {
        this.map[idx][i] = pair;
        this.size++;
        return;
      }
    }

    this.map[idx].push(pair);
    this.size++;
  }

  get(key) {
    const idx = this.hash(key);

    if (this.map[idx]) {
      for (let i = 0; i < this.map[idx].length; i++) {
        let [storedKey, storedValue] = this.map[idx][i];
        if (storedKey === key) return storedValue;
      }
    }

    return -1;
  }

  remove(key) {
    const idx = this.hash(key);
    if (this.map[idx]) {
      for (let i = 0; i < this.map[idx].length; i++) {
        let [storedKey] = this.map[idx][i];
        if (storedKey === key) {
          this.map[idx].splice(i, 1);
          this.size--;
        }
      }
    }
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = Math.imul(31, hash) + key.charCodeAt(i) | 0;
    }
    return Math.abs(hash) % this.map.length;
  }
}