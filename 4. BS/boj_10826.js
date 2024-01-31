/**
 * 10816 [숫자 카드2]
 * 2024.01.31.수요일
 * https://www.acmicpc.net/problem/10816
 *
 * 입력 : 숫자 카드 개수 / 숫자 카드/ 정수 개수 m개 / 정수
 * 출력 : 각 수가 적힌 숫자카드를 몇개 가지고 있는지 나열
 * point :
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = +input[2];
const query = input[3].split(" ").map(Number);
let answer = "";

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    // 동일한 값을 가지는 원소가 여러개라면 최대한 왼쪽으로 이동하기
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동하기
  }
  return end;
}
for (let i = 0; i < m; i++) {
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + " ";
}
console.log(answer);
