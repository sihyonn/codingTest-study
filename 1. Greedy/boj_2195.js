/**
 * 2195번 [문자열 복사]
 * 2024.01.08.월요일
 * https://www.acmicpc.net/problem/2195
 *
 * 입력 : 원본 문자열(s), 새로운 문자열(p)
 * 출력 : copy함수의 최소 사용횟수
 */

/*
  입력정제
  originStr = 원본 문자열(배열)
  newStr = 새로운 문자열(배열))
*/

const fs = require('fs');
let input = fs.readFileSync('./input2195.txt').toString().split('\n');

let originStr = input[0];
let newStr = input[1];

//문제풀이
function solution(originStr, newStr) {
  let idx = 0;
  let cnt = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (originStr.indexOf(newStr.substring(idx, i + 1)) != -1) continue;
    cnt++;
    idx = i;
  }
  console.log(cnt + 1);
}

solution(originStr, newStr);
