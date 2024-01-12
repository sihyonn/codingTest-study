/**
 * 1049번 [기타줄]
 * 2024.01.11.목요일
 * https://www.acmicpc.net/problem/1049
 *
 * 입력 : 끊어진 기타줄 수(n) 브랜드 수(m)/ 6개 묶음 가격 낱개 가격
 * 출력 : 기타줄을 적어도 N개 사기 위해 필요한 돈의 최솟값
 * point : 회의가 끝나는 시간이 빨라야 최대한 사용할 수 있다. 끝나는 시간 기준 오름차순 정렬
 */
const input = require("fs")
  .readFileSync("1. Greedy/input_11399.txt")
  .toString()
  .trim()
  .split("\n");
