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
  .readFileSync("4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
