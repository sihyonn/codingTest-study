/**
 * 10815번 [숫자 카드]
 * 2023.12.11.월
 */
const input = require("fs")
  .readFileSync("2. Sorting/input_10815.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let n_arr = new Set(input[1].split(" ").map(Number));
let m = Number(input[2]);
let m_arr = input[3].split(" ").map(Number);
let arr = [];

for (let i = 0; i < m; i++) {
  if (n_arr.has(m_arr[i])) arr.push(1);
  else arr.push(0);
}
console.log(arr.join(" "));
