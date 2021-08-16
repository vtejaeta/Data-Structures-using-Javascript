// Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp. For example, the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.

function isBalancedString(element) {
  let stack = [];

  for (let char of element) {
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (char !== stack.pop()) return false;
        break;
    }
  }
  return stack.length === 0;
}
