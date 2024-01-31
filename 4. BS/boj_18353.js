/**
 * 18353 [병사 배치하기]
 * 2024.01.31.수요일
 * https://www.acmicpc.net/problem/18353
 *
 * 입력 : 병사 수 n / 병사의 전투력
 * 출력 : 남아있는 병사의 추가 퇴대가 되도록 열외해야하는 병사의 수
 * point : 이분 탐색으로 푸는 문제
 */
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4. BS/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const solider = input[1].split(" ").map(Number);

solider.reverse();
let answer = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    // 동일한 값을 가지는 원소가 여러개라면 최대한 왼쪽으로 이동하기
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (x of solider) {
  if (answer[answer.length - 1] < x) {
    //마지막 원소보다 현재 원소 x가 크면 가장 뒤에 삽입
    answer.push(x);
  } else {
    // x이하인 원소가 있으면 가능한 왼쪽에 있는 원소와 x를 교체
    let index = lowerBound(answer, x, 0, answer.length);
    answer[index] = x;
  }
}
console.log(n - (answer.length - 1));
