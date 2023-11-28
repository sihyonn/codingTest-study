/*
입력 : 첫번째 줄 - 사람의 수, 두번째 줄 - 각 사람이 돈을 인출하는데 걸리는 시간
*/
const fs = require("fs");
let input = fs.readFileSync("1. Greedy/input_11399.txt").toString().split("\n");
console.log(input);
// let input = [5, '3 1 4 3 2']

const n = Number(input[0]);
const time = input[1].split(" ").map(Number);

// solution.js
function solution(n, time) {
  let sum = 0;
  let count = 0;
  // 오름차순 정렬
  time.sort((a, b) => a - b);
  for (let i = 0; i < time.length; i++) {
    sum += time[i];
    count += sum;
  }
  console.log(count);
}
solution(n, time);
