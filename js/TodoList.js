/* https://leetcode.com/problems/design-a-todo-list/ */

/*
Design a Todo List Where users can add tasks, mark them as complete, or get a list of pending tasks. Users can also add tags to tasks and can filter the tasks by certain tags.

Implement the TodoList class:

TodoList() Initializes the object.
int addTask(int userId, String taskDescription, int dueDate, List<String> tags) Adds a task for the user with the ID userId with a due date equal to dueDate and a list of tags attached to the task. The return value is the ID of the task. This ID starts at 1 and is sequentially increasing. That is, the first task's id should be 1, the second task's id should be 2, and so on.
List<String> getAllTasks(int userId) Returns a list of all the tasks not marked as complete for the user with ID userId, ordered by the due date. You should return an empty list if the user has no uncompleted tasks.
List<String> getTasksForTag(int userId, String tag) Returns a list of all the tasks that are not marked as complete for the user with the ID userId and have tag as one of their tags, ordered by their due date. Return an empty list if no such task exists.
void completeTask(int userId, int taskId) Marks the task with the ID taskId as completed only if the task exists and the user with the ID userId has this task, and it is uncompleted.

Input
["TodoList", "addTask", "addTask", "getAllTasks", "getAllTasks", "addTask", "getTasksForTag", "completeTask", "completeTask", "getTasksForTag", "getAllTasks"]
[[], [1, "Task1", 50, []], [1, "Task2", 100, ["P1"]], [1], [5], [1, "Task3", 30, ["P1"]], [1, "P1"], [5, 1], [1, 2], [1, "P1"], [1]]
Output
[null, 1, 2, ["Task1", "Task2"], [], 3, ["Task3", "Task2"], null, null, ["Task3"], ["Task3", "Task1"]]
*/

class Task {
  constructor(userId, description, dueDate, tags, taskId) {
    this.id = taskId;
    this.userId = userId;
    this.desc = description;
    this.dueDate = dueDate;
    this.tags = new Set(tags);
    this.isComplete = false;
  }
}

class TodoList {
  constructor() {
    this.tasks = new Map();
    this.taskCount = 0;
  }
  /** 
   * @param {number} userId 
   * @param {string} taskDescription 
   * @param {number} dueDate 
   * @param {string[]} tags
   * @return {number}
   */
  addTask(userId, taskDescription, dueDate, tags) {
    if (!this.tasks.has(userId)) this.tasks.set(userId, new Map());
    const userTasks = this.tasks.get(userId);
    const taskId = ++this.taskCount;
    const task = new Task(userId, taskDescription, dueDate, tags, taskId);
    userTasks.set(taskId, task);
    return taskId;
  }

  /** 
   * @param {number} userId
   * @return {string[]}
   */
  getAllTasks(userId) {
    if (!this.tasks.has(userId)) return [];
    return [...this.tasks.get(userId).values()]
      .filter(({ isComplete }) => !isComplete)
      .sort((a, b) => a.dueDate - b.dueDate)
      .map(({ desc }) => desc);
  }

  /** 
   * @param {number} userId 
   * @param {string} tag
   * @return {string[]}
   */
  getTasksForTag(userId, tag) {
    if (!this.tasks.has(userId)) return [];
    return [...this.tasks.get(userId).values()]
      .filter(({ isComplete, tags }) => !isComplete && tags.has(tag))
      .sort((a, b) => a.dueDate - b.dueDate)
      .map(({ desc }) => desc);
  }

  /** 
   * @param {number} userId 
   * @param {number} taskId
   * @return {void}
   */
  completeTask(userId, taskId) {
    if (!this.tasks.has(userId)) return;
    const task = this.tasks
      .get(userId)
      .get(taskId);
    if (task) task.isComplete = true;
  }
};

/** 
 * Your TodoList object will be instantiated and called as such:
 * var obj = new TodoList()
 * var param_1 = obj.addTask(userId,taskDescription,dueDate,tags)
 * var param_2 = obj.getAllTasks(userId)
 * var param_3 = obj.getTasksForTag(userId,tag)
 * obj.completeTask(userId,taskId)
 */
