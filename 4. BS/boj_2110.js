/**
 * 2110 [공유기 설치]
 * 2024.01.26.금요일
 * https://www.acmicpc.net/problem/2110
 *
 * 입력 : 집의 개수 n 공유기 개수 c/ n개의 줄에 집의 좌표
 * 출력 : 첫째 줄에 가장 인접한 두 공유기 사이의 최대 거리
 * point : 이분 탐색으로 푸는 문제
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, c] = input.shift().split(" ");
const house = input.map(Number).sort((a, b) => a - b);

function solve(arr, target) {
  let start = 1;
  let end = arr[arr.length - 1] - arr[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let prev = arr[0];
    let count = 1;
    for (const cur of arr) {
      if (cur - prev < mid) continue;
      prev = cur;
      count += 1;
    }

    if (count < target) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}
console.log(solve(house, c));
