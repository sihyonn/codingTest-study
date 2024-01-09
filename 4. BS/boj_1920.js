const input = require("fs")
  .readFileSync("./input_1920.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const n_arr = input[1].split(" ").map(Number);
const m_arr = input[3].split(" ").map(Number);

n_arr.sort((a, b) => a - b);

let answer = [];

for (let x of m_arr) {
  let left = 0;
  let right = n - 1;
  let found = false;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (x === n_arr[mid]) {
      found = true;
      break;
    } else if (x > n_arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  found ? answer.push(1) : answer.push(0);
}
console.log(answer.join("\n"));
