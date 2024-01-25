/**
 * 1654번 [랜선 자르기]
 * 2024.01.25.목
 * https://www.acmicpc.net/problem/1654
 *
 * 입력 : 가지고 있는 랜선 개수(k), 필요한 랜선 개수(n) / 이미 가지고 있는 각 랜선의 길이
 * 출력 : n개를 만들 수 있는 랜선의 최대 길이 출력
 */

const fs = require('fs');
let input = fs.readFileSync('./input1654.txt').toString().split('\n');
let [k, n] = input[0].split(' ').map(Number);
let arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

function solution(n, arr) {
  let start = 1;
  let end = Math.max(...arr);
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (let len of arr) {
      total += parseInt(len / mid);
    }

    if (total >= n) {
      result = mid;
      start = mid + 1;
      // total이 더 크다는건 더 크게해서 잘라야한다는 뜻 = 오른쪽에서 탐색
    } else {
      // 아니면 total이 더 작다는건 더 작게해서 잘라야한다는 뜻 = 왼쪽에서 탐색
      end = mid - 1;
    }
  }
  console.log(result);
}

solution(n, arr);
