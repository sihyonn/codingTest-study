/**
 * 2343번 [기타 레슨]
 * 2024.01.30.화
 * https://www.acmicpc.net/problem/2343
 *
 * 입력 : 강의 수(n), 블루레이 개수(m) / 강의 순서대로 강의의 분 단위(lectures)
 * 출력 : 가능한 블루레이 크기중 최소 출력
 */

const fs = require('fs');
let input = fs.readFileSync('./input2343.txt').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let lectures = input[1].split(' ').map(Number);

function solution(n, m, lectures) {
  let start = 1;
  let end = lectures.reduce((a, b) => a + b, 0);
  let result;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    let cnt = 1;

    for (let i = 0; i < n; i++) {
      sum += lectures[i];
      if (sum > mid) {
        cnt++;
        sum = lectures[i];
      }
    }

    if (cnt > m) start = mid + 1;
    else {
      result = mid;
      end = mid - 1;
    }
  }
  console.log(result);
}

solution(n, m, lectures);
