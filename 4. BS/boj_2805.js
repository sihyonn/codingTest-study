/**
 * 2805 [나무 자르기]
 * 2024.01.24.수요일
 * https://www.acmicpc.net/problem/2805
 *
 * 입력 : 나무의 수 N  상근이가 집으로 가져가려고 하는 나무의 길이 M / 둘째 줄에는 나무의 높이
 * 출력 : 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값
 * point :
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ");
const tree = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solve(arr, target) {
  let start = 0;
  let end = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let x of arr) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= target) {
      if (mid > answer) answer = mid;
      // 최댓값 계속 구해주기.
      // 이 부분을 제외하고는 일반적인 이분탐색 코드와 똑같다.
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solve(tree, M));
