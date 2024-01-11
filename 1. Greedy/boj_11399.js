/*
입력 : 첫번째 줄 - 사람의 수, 두번째 줄 - 각 사람이 돈을 인출하는데 걸리는 시간
춢력 : 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값
포인트 : 시간을 오름차순 정렬
*/
const input = require("fs")
  .readFileSync("1. Greedy/input_11399.txt")
  .toString()
  .trim()
  .split("\n");

const time = input[1].split(" ").map(Number);
// 3 1 4 3 2
// 1 2 3 3 4
time.sort((a, b) => a - b);
// solution.js
function solution(time) {
  let sum = 0;
  let count = 0;
  // 오름차순 정렬
  for (let i = 0; i < time.length; i++) {
    sum += time[i];
    count += sum;
  }
  console.log(count);
}
solution(time);
