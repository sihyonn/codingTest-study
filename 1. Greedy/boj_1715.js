/*
 * 백준 1715번 [카드 정렬하기] -> 공통 문제
 * 2024.01.12.금
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./input_boj1715.txt').toString().split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

/* 우선순위 큐 사용 */


function input_list(input) {
  let card_list = [];
  for (let i=1; i < input.length; i++){
    let temp = Number(input[i]);
    card_list.push(temp);
  }
  return card_list;
}

const num = Number(input[0]);
const card = input_list(input);

function solution(num, card_list) {
  
}

solution(num, card);


console.log(num);
console.log(card);
console.log(card[0]);
console.log(card[1]);
console.log(card[2]);