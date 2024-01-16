/**
 * 1377 [버블 소트]
 * 2024.01.15.월요일
 * https://www.acmicpc.net/problem/1377
 *
 * 입력 : 500,000보다 작거나 같은 자연수 / 째 줄부터 N개의 줄에 A[1]부터 A[N]까지 하나씩 주어짐
 * 출력 :  정답
 * point : 버블 정렬을 구현하는 것이 아니라 해당 원소가 정렬되기 전까지 몇번을 이동했는지를 구하고 그 중 최댓값을 구하는 문제
 */
const input = require("fs")
  .readFileSync("2. Sorting/input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.slice(1).map((num, idx) => ({
  num: parseInt(num),
  index: idx + 1,
}));

arr.sort((a, b) => a.num - b.num);

let answer = 0;
for (let i = 0; i < arr.length; i++) {
  const diff = arr[i].index - i;
  answer = Math.max(answer, diff);
}
console.log(answer);
