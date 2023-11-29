/**
 * 1343번 [폴리오미노]
 * 2023.11.29.수
 * https://www.acmicpc.net/problem/1343
 *
 * 입력 : 보드판(X와 .으로 이루어진)
 * 출력 : AAAA와 BB로 .ㅇ을 제외한 X 채우기
 * point : 큰 A 길이 이상이면 A로 다채우고 나머지 B로
 */

/* 입력정제
  입력은 문자열 그대로 받아옴 
  input = XX.XXXXXXXXXX..XXXXXXXX...XXXXXX
*/
const fs = require('fs');
let input = fs.readFileSync('./input1343.txt').toString();

// 문제풀이
function solution(input) {
  let board = input.split('.');
  let arr = [];

  board.forEach((b) => {
    if (b.length != 0 && b.length % 2 === 0) {
      let regex = /X{4}/g;
      let bb = b.replace(regex, 'AAAA').replaceAll('X', 'B');
      // console.log(bb);
      arr.push(bb);
    } else if (b.length === 0) {
      arr.push('');
    }
  });

  console.log(arr.join('.'));
}

solution(input);
