module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];

  let BracketsConfigObj = new Map(bracketsConfig);
  let strSplit = str.split('');
  for ( let ch of strSplit) {
    if (ch == BracketsConfigObj.get(stack[stack.length -1])) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  if (stack.length == 0) {
    return true
  } else {
    return false
  }
}