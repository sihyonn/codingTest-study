let input = require("fs")
  .readFileSync("1. Greedy/input_1343.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];

function solution(n) {
  n = n.replace(/XXXX/g, "AAAA");
  n = n.replace(/XX/g, "BB");

  return n.split("").includes("X") ? -1 : n;
}

const answer = solution(n);
console.log(answer);
