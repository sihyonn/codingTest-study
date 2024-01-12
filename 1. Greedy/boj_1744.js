/**
 * 1744번 [수 묶기]
 * 2024.01.12.금요일
 * https://www.acmicpc.net/problem/1744
 *
 * 입력 : 수열 크기(n) / 수열의 각 수
 * 출력 : 합이 최대가 나오도록 수를 묶었을 때 최대 합
 * 포인트 :
 */

const fs = require('fs');
let input = fs.readFileSync('./input1744.txt').toString().split('\n');

let [n, ...arr] = input;
let sequence = arr.map(Number).sort((a, b) => a - b);

//문제풀이
function solution(sequence) {
  let positive = sequence.filter((n) => n > 0).sort((a, b) => b - a);
  let negative = sequence.filter((n) => n <= 0);
  let sum = 0;

  // 양수 합산
  for (let i = 0; i < positive.length; i += 2) {
    if (i === positive.length - 1) {
      // 홀수개면 마지막애 짝궁 없으니 그냥 합산
      sum += positive[i];
    } else if (
      // 마지막 도는데 값도 1이라면 그냥 합산
      i === positive.length - 2 &&
      positive[positive.length - 1] === 1
    ) {
      sum += positive[i] + positive[i + 1];
    } else {
      // 그 외 다 두 수 곱셈 후 합산
      sum += positive[i] * positive[i + 1];
    }
  }

  // 음수(0포함) 합산
  for (let i = 0; i < negative.length; i += 2) {
    if (i === negative.length - 1) sum += negative[i];
    else sum += negative[i] * negative[i + 1];
  }

  console.log(sum);
}

solution(sequence);
