/**
 * 1931번 [회의실 배정]
 * 2024.01.09.화요일
 * https://www.acmicpc.net/problem/1931
 *
 * 입력 : 회의 개수(n)/ 시작시간 끝나는시간
 * 출력 : 최대 사용할 수 있는 회의의 최대 개수
 * point : 서로겹치지 않는 활동에 대해 종료시간이 빠른걸 선택하자
 */

const fs = require('fs');
let input = fs.readFileSync('./input1931.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}

//문제풀이
function solution(arr) {
  arr = arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let result = 1;
  let cur = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    let [start, end] = arr[i];
    if (cur <= start) {
      cur = end;
      result++;
    }
  }

  console.log(result);
}

solution(arr);
