/**
 * 18353번 [병사 배치하기]
 * 2023.12.11.월
 */
const input = require("fs")
  .readFileSync("2. Sorting/input_10815.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let soldier = input[1].split(" ").map(Number);
