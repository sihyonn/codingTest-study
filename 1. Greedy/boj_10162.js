/**
 * 10162번 [전자레인지]
 * 2023.11.28.화
 * https://www.acmicpc.net/problem/10162
 *
 * 입력 : 조리에 걸리는 시간
 * 출력 : a,b,c 버튼을 몇 번 눌러야 조리가 완성되는지
 * point : 큰 a부터 조져주기
 */

/* 입력정제
  time을 Number로만 변환해주면 될듯!
*/

const fs = require('fs');
let input = fs.readFileSync('./input10162.txt').toString();
let time = Number(input);

// 문제풀이
function solution(time) {
  let a = 0,
    b = 0,
    c = 0;

  if (time % 10 !== 0) console.log(-1);
  else {
    a = Math.floor(time / 300);
    b = Math.floor((time % 300) / 60);
    c = Math.floor((time % 300) % 60) / 10;

    console.log(`${a} ${b} ${c}`);
  }
}

solution(time);
