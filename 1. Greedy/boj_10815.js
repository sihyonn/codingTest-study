/**
 * 10815번 [숫자카드]
 * 2023.12.06.수
 * https://www.acmicpc.net/problem/10815
 *
 * 입력 : 상근이가 가진 카드개수, 상근이가 가진 카드에 적힌 수, 비교할 숫자 개수, 비교할 카드 숫자
 * 출력 : 비교할 카드 숫자에 대해 상근이한테 있으면 1, 없으면 0 공백 구분 출력
 * point : 이진탐색 아니라면 그냥 비교숫자카드 돌면서 상근이가 가진 카드에 적힌수에 includes면 1 아니면 0
 */

const fs = require('fs');
let input = fs.readFileSync('./input10815.txt').toString().split('\n');
let card = input[1].split(' ').map(Number);
let target = input[3].split(' ').map(Number);

function solution(card, target) {
  let isHave = target.map((num) => (card.includes(num) ? 1 : 0)).join(' ');
  console.log(isHave);
}

solution(card, target);
