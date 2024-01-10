/**
 * 1744번 [수 묶기]
 * 2024.01.10.수요일
 * https://www.acmicpc.net/problem/1744
 *
 * 입력 : 수열의 크기(n)/ 수열의 각 수
 * 출력 : 수를 합이 최대가 나오게 묶었을 때 합을 출력
 * point : 최소힙을 사용하자
 */
const [n, ...n_arr] = require("fs")
  .readFileSync("1. Greedy/input_1744.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let plus_arr = [];
let minus_arr = [];
let result = 0;

n_arr.forEach((v) => {
  if (v <= 0) {
    minus_arr.push(v);
  } else if (v > 1) {
    plus_arr.push(v);
  } else {
    //1의 경우
    result++;
  }
});

minus_arr.sort((a, b) => a - b);
plus_arr.sort((a, b) => b - a);

for (let i = 0; i < minus_arr.length; i += 2) {
  if (i + 1 < minus_arr.length) {
    result += minus_arr[i] * minus_arr[i + 1];
  } else {
    result += minus_arr[i];
  }
}
for (let i = 0; i < plus_arr.length; i += 2) {
  if (i + 1 < plus_arr.length) {
    result += plus_arr[i] * plus_arr[i + 1];
  } else {
    result += plus_arr[i];
  }
}
console.log(result);
