/**
 * 1654 [랜선 자르기]
 * 2024.01.24.수요일
 * https://www.acmicpc.net/problem/1654
 *
 * 입력 : 랜선의 개수 K 필요한 랜선의 개수 N
 * 출력 : K줄에 걸쳐 이미 가지고 있는 각 랜선의 길이
 * point : 이분 탐색으로 푸는 문제
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const [k, n] = input.shift().split(" ");
const line = input.map(Number).sort((a, b) => a - b);

function solve(arr, target) {
  let start = 0;
  let end = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (sum >= target) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solve(line, n));
