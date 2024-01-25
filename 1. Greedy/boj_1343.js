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
    // board 배열의 각 요소인 문자열 b가 존재할때
    if (b.length !== 0) {
      // b, 즉 X가 짝수개일때
      if (b.length % 2 === 0) {
        let regex = /X{4}/g;
        let bb = b.replace(regex, 'AAAA').replaceAll('X', 'B');
        arr.push(bb);
      } else {
        // X가 홀수개일때
        arr.push(-1);
      }
    } else {
      // b가 공백이면 그대로 두기
      arr.push('');
    }
  });

  let result = arr.join('.');
  console.log(result.includes(-1) ? -1 : result);
}

solution(input);
