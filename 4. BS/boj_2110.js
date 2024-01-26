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
