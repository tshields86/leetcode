/* https://leetcode.com/problems/encode-and-decode-strings/ */

/* 
Design an algorithm to encode a list of strings to a string.The encoded string is then sent over the network and is decoded back to the original list of strings.


Input: dummy_input = ["Hello", "World"]
Output: ["Hello", "World"]

Input: dummy_input = [""]
Output: [""]
*/

class Codec {
  static nonASCIICode = String.fromCharCode(257);

  encode(array) {
    return array.join(Codec.nonASCIICode);
  }

  decode(string) {
    return string.split(Codec.nonASCIICode);
  }
}

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = strs => {
  const { encode } = new Codec();
  return encode(strs);
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = s => {
  const { decode } = new Codec();
  return decode(s);
};
