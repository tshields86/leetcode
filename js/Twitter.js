/* https://leetcode.com/problems/design-twitter/ */

/*
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

Twitter() Initializes your twitter object.
void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
*/

class User {
  constructor(userId) {
    this.id = userId;
    this.tweets = []; // priority queue
    this.follows = new Set();
  }
}

class Tweet {
  constructor(tweetId, timeStamp) {
    this.id = tweetId;
    this.ts = timeStamp;
  }
}


class Twitter {
  constructor() {
    this.users = new Map();
    this.ts = -1;
  }

  /** 
   * @param {number} userId 
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    this.#checkAddUsers(userId);
    const user = this.users.get(userId);
    user.tweets.push(new Tweet(tweetId, ++this.ts));
  }

  /** 
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    this.#checkAddUsers(userId);
    const user = this.users.get(userId);
    return [...user.follows.values()]
      .reduce((acc, { tweets }) => {
        return acc.concat(tweets.slice(-10));
      }, user.tweets.slice(-10))
      .sort((a, b) => b.ts - a.ts)
      .map(({ id }) => id)
      .slice(0, 10);
  }

  /** 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    this.#checkAddUsers(followerId, followeeId);
    const follower = this.users.get(followerId);
    const followee = this.users.get(followeeId);
    follower.follows.add(followee);
  }

  /** 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    this.#checkAddUsers(followerId, followeeId);
    const follower = this.users.get(followerId);
    const followee = this.users.get(followeeId);
    follower.follows.delete(followee);
  }

  #checkAddUsers(userId1, userId2) {
    if (userId1 && !this.users.has(userId1)) {
      this.users.set(userId1, new User(userId1));
    }
    if (userId2 && !this.users.has(userId2)) {
      this.users.set(userId2, new User(userId2));
    }
  }
}

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
