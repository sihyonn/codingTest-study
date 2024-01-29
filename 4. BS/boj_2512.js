/**
 * 2512 [예산]
 * 2024.01.29.월요일
 * https://www.acmicpc.net/problem/2512
 *
 * 입력 : 예산 개수 / 예산 금액 / 목표 총 예산
 * 출력 : 배정된 예산들 중 최댓값인 정수
 * point : - 배정된 총 예산이 조건을 만족하면, 상한금액을 증가시킨다
           - 배정된 총 예산이 조건을 만족하지 못한다면 상한 금액을 감소시킨다
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const request = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = +input[2];

let start = 1;
let end = request[request.length - 1];
let answer = Number.MIN_SAFE_INTEGER;

function solve(arr, target) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0; // 가능한 총액 계산

    for (let x of arr) {
      total += Math.min(x, mid);
    }

    if (total <= target) {
      // 예산 배정이 가능하다면 상한액 증가시키기
      answer = mid;
      start = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solve(request, m));
