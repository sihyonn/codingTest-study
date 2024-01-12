/**
 * 10508번 [2+1]
 * 2024.01.12.금요일
 * https://www.acmicpc.net/problem/11508
 *
 * 입력 : 유제품의 수 / 유제품 가격
 * 출력 :  N개의 유제품을 모두 살 때 필요한 최소비용
 * point : 회의가 끝나는 시간이 빨라야 최대한 사용할 수 있다. 끝나는 시간 기준 오름차순 정렬
 */
let input = require("fs")
  .readFileSync("1. Greedy/input_11508.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const price = input.slice(1);
let result = 0;

price.sort((a, b) => Number(b) - Number(a));

for (let i = 0; i < n; i++) {
  if ((i + 1) % 3 === 0) continue;
  result += Number(price[i]);
}
console.log(result);
