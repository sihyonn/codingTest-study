/**
 * 2343 [기타 레슨]
 * 2024.01.30.화요일
 * https://www.acmicpc.net/problem/2343
 *
 * 입력 : 강의 수 블루레이 수/ 강의 길이
 * 출력 : 가능한 블루레이 크기중 최소
 * point : start - 블루레이의 최대 크기, end - 블루레이들을 모두 더한 합
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const classes = input[0].split(" ").map(Number);

let left = Math.max(...classes);
let right = classes.reduce((acc, cur) => acc + cur);

let answer = Number.MAX_SAFE_INTEGER;
while (left <= right) {
  let cnt = 1;
  let mid = Math.floor((left + right) / 2);
  let tmp = 0;
  for (let i = 0; i < classes.length; i++) {
    if (tmp + classes[i] <= mid) {
      tmp += classes[i];
    } else {
      tmp = 0 + classes[i];
      cnt++;
      if (cnt > M) break;
    }
  }

  if (cnt > M) {
    left = mid + 1;
  }

  if (cnt <= M) {
    if (answer >= mid) answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
