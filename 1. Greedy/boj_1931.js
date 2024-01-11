/**
 * 1931번 [회의실 배정하기]
 * 2024.01.11.목요일
 * https://www.acmicpc.net/problem/1931
 *
 * 입력 : 회의실 수(n)/ 회의 정보: 시작시간 끝나는시간
 * 출력 : 최대 사용할 수 있는 회의의 최대 개수
 * point : 회의가 끝나는 시간이 빨라야 최대한 사용할 수 있다. 끝나는 시간 기준 오름차순 정렬
 */
const input = require("fs")
  .readFileSync("1. Greedy/input_1931.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const time = [];

for (let i = 1; i < n + 1; i++) {
  time.push(input[i].split(" ").map(Number));
}

time.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let result = 1;
let end = time[0][1]; // 현재 회의 끝나는 시간
for (let i = 1; i < time.length; i++) {
  let [from, to] = time[i]; // from : 다음 회의 시작시간
  if (from >= end) {
    result++;
    end = to;
  }
}
console.log(result);
