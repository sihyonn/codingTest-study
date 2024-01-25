/**
 * 1300번 [K번째 수]
 * 2023.12.10.일
 * https://www.acmicpc.net/problem/1300
 *
 * 입력 : 배열크기 n, 찾는 수 위치 k
 * 출력 : 비교할 카드 숫자에 대해 상근이한테 있으면 1, 없으면 0 공백 구분 출력
 * point : 이진탐색 아니라면 그냥 비교숫자카드 돌면서 상근이가 가진 카드에 적힌수에 includes면 1 아니면 0
 */

const fs = require('fs');
let input = fs.readFileSync('./input1300.txt').toString().split('\n');
let n = input[0];
let k = input[1];

function countLesttThanOrEqual(x, n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += Math.min(Math.floor(x / i), n);
  }
  return count;
}

function solution(n, k) {
  let start = 1;
  let end = n * n;
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (countLesttThanOrEqual(mid, n) >= k) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(result);
}

solution(n, k);

// 실패작
/*
const fs = require('fs');
let input = fs.readFileSync('./input1300.txt').toString().split('\n');
let n = input[0];
let k = input[1];

function solution(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result.push(i * j);
    }
  }
  result.sort((a, b) => a - b);
  console.log(result[k]);
}

solution(n, k);
*/
