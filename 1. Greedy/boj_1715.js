/*
 * 백준 1715번 [카드 정렬하기]
 * 2024.01.09.화
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const fs = require('fs');
let input = fs.readFileSync('./boj1715_input.txt').toString().split('\n');

function input_list(input) {
  let card_list = [];
  for (let i=1; i < input.length; i++){
    let temp = Number(input[i]);
    card_list.push(temp);
  }
  return card_list;
}

const num = Number(input[0]);
const card = input_list(num, input);

let min_check = 999999999;

function solution(num, card_list) {
  
}

solution(num, card);


console.log(num);
console.log(card);
console.log(card[0]);
console.log(card[1]);
console.log(card[2]);