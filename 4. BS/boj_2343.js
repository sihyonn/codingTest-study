/**
 * 2343번 [기타 레슨]
 * 2024.01.02.화
 * https://www.acmicpc.net/problem/2343
 *
 * 입력 : 강의 수, 블루레이 개수 / 강의 순서대로 강의의 분 단위
 * 출력 : 가능한 블루레이 크기중 최소 출력
 */

const fs = require('fs');
let input = fs.readFileSync('./input2343.txt').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

function solution(n, m, arr) {
  let start = 0;
  let end = arr.reduce((a, b) => a + b);
  let answer = Infinity;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let cnt = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        cnt = Infinity;
        break;
      }
      if (sum + arr[i] <= mid) {
        sum += arr[i];
      } else {
        cnt++;
        sum = arr[i];
      }
    }
    if (cnt <= m) {
      end = mid - 1;
      answer = Math.min(answer, mid);
    } else {
      start = mid + 1;
    }
  }
  console.log(answer);
}

solution(n, m, arr);
