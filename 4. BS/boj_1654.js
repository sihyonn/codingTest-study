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
