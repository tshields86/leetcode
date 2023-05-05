/* https://leetcode.com/problems/lru-cache/ */

/* 
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise,
add the key-value pair to the cache. If the number of keys exceeds the capacity from
this operation, evict the least recently used key.

Follow up:
Could you do get and put in O(1) time complexity?

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/

/*
Ordered dictionary
Time: O(1)
Space: O(capacity)
*/

class LRUCacheMap {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  };
}

/* 
Hashmap + Doubly Linked List
Time: O(1)
Space: O(capacity)
*/
class Node {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cacheCapacity = capacity;
    this.nodeMap = new Map();

    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.nodeMap.has(key)) {
      const node = this.nodeMap.get(key);
      this.remove(node);
      this.add(node);
      return node.value
    }
    return -1;
  }

  put(key, value) {
    if (this.nodeMap.has(key)) {
      const node = this.nodeMap.get(key);
      this.remove(node);
      node.value = value;
      this.add(node);
    } else {
      if (this.nodeMap.size === this.cacheCapacity) {
        this.nodeMap.delete(this.tail.prev.key);
        this.remove(this.tail.prev);
      }

      const newNode = new Node(key, value);
      this.nodeMap.set(key, newNode);
      this.add(newNode);
    }
    return null;
  }

  add(node) {
    const headNext = this.head.next;
    node.next = headNext;
    headNext.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  remove(node) {
    const nextNode = node.next;
    const prevNode = node.prev;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
  }
}
