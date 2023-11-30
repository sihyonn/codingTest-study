const input = require("fs")
  .readFileSync("1. Greedy/input_2212.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0]; // 여기 앞에 +는 왜 붙이는 거지?
const k = +input[1];
const sensor = input[2].split(" ").map((i) => +i);

function solution(n, k, sensor) {
  if (k >= n) return 0;

  const diff = [];
  let answer = 0;

  sensor.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    diff.push(sensor[i + 1] - sensor[i]);
  }
  diff.sort((a, b) => b - a);

  for (let i = k - 1; i < n - 1; i++) {
    answer += diff[i];
  }
  return answer;
}

const answer = solution(n, k, sensor);
console.log(answer);
