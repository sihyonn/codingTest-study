/**
 * 7490번[0만들기]
 * 2023.12.12.화
 * https://www.acmicpc.net/problem/7490
 *
 * 입력 : 테스트케이스 수, 각 테스트케이스에 해당 하는 N 차례로
 * 출력 : 1~N까지 수 사이에 + - " " 을 넣어서 만든 식의 결과가 0인 수식출력
 */

/**
 * 입력정제
 * - 테스트케이스 : Number(input[0])
 * - 각 테스트케이스 처리 : n 받기 => for문 돌면서 n = Number(input[tc])
 */

const fs = require('fs');
let input = fs.readFileSync('./input7490.txt').toString().split('\n');
let testCase = Number(input[0]);
let n = 0;
let arr = [];

function solution(result, depth) {
  // depth 즉 연산자가 n-1개면 종료조건
  if (depth === n - 1) {
    // 1. 수식만들기 => 수한번 연산자한번 짝맞춰서 담고, 마지막에 남은 수한번더
    let str = '';
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1] + ''; // ''붙여주는 이유 : 문자열이 되라고! 그냥쓰면 숫자가 붙는 셈
    // 2. 공백은 제거해서 이어붙여주고 수식을 계산
    let current = eval(str.split(' ').join(''));
    // 3. 수식을 계산한 값이 0이면 수식 출력하고 재귀 탈출
    if (current == 0) console.log(str);
    return;
  }

  //하나씩 돌면서 탐색
  for (let x of [' ', '+', '-']) {
    result.push(x);
    solution(result, depth + 1);
    result.pop();
  }
}

for (let tc = 1; tc <= testCase; tc++) {
  // n입력받기
  n = Number(input[tc]);
  // arr채워주기
  arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  // dfs호출(본격탐색) [] = result , depth = 0부터
  solution([], 0);
  // 각 테케 사이엔 줄바꿈필요
  console.log();
}
