/**
 * 2110번 [공유기 설치]
 * 2024.01.26.금
 * https://www.acmicpc.net/problem/2110
 *
 * 입력 : 집의 개수(n), 공유기 개수(c) / 집의 좌표(x)
 * 출력 : 가장 인접한 두 공유기 사이의 최대거리 출력
 */

const fs = require('fs');
let input = fs.readFileSync('./input2110.txt').toString().split('\n');
let [n, c] = input[0].split(' ').map(Number);
let arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

function solution(c, arr) {
  let start = 1;
  let end = Math.max(...arr);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let cnt = 1;
    let prev = arr[0];

    for (let cur of arr) {
      if (cur - prev < mid) continue;
      prev = cur;
      cnt += 1;
    }

    if (cnt < c) end = mid - 1;
    else start = mid + 1;
  }
  console.log(end);
}

solution(c, arr);
