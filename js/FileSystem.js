/* https://leetcode.com/problems/design-file-system/ */

/*
You are asked to design a file system that allows you to create new paths and associate them with different values.

The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.

Implement the FileSystem class:

bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already exists or its parent path doesn't exist.
int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.

Input: 
["FileSystem","createPath","get"]
[[],["/a",1],["/a"]]
Output: 
[null,true,1]

Input: 
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
Output: 
[null,true,true,2,false,-1]
*/

class FileNode {
  constructor(path, value) {
    this.path = path;
    this.value = value;
    this.children = new Map();
  }
}

class FileSystem {
  constructor() {
    this.root = new FileNode('');
  }

  /** 
   * @param {string} path 
   * @param {number} value
   * @return {boolean}
   */
  createPath(path, value) {
    const components = path.split('/');
    let node = this.root;
    for (let i = 1; i < components.length - 1; i++) {
      if (!node.children.has(components[i])) return false;
      node = node.children.get(components[i]);
    }
    const newComponent = components[components.length - 1];
    if (node.children.has(newComponent)) return false;
    node.children.set(newComponent, new FileNode(newComponent, value));
    return true;
  }

  /** 
   * @param {string} path
   * @return {number}
   */
  get(path) {
    const components = path.split('/');
    let node = this.root;
    for (let i = 1; i < components.length; i++) {
      if (!node.children.has(components[i])) return -1;
      node = node.children.get(components[i]);
    }
    return node.value;
  }
}

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
