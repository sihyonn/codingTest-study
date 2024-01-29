/*
 * 백준 2343번 [기타 레슨] -> 공통 문제
 * 2024.01.29.월
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj1654.txt')
  .toString()
  .trim()
  .split('\n');

const input_check1 = input[0].split(' ');
const input_K = +input_check1[0];
const input_N = +input_check1[1];

const input_length = [];
for (let i=1; i < input.length; i++) {
  let temp = +input[i];
  input_length.push(temp);
}

input_length.sort();

function countCables(cutLength) {
  let count = 0;
  for (let i = 0; i < input_length.length; i++) {
    count += Math.floor(input_length[i] / cutLength);
  }
  return count;
}

function solution(left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cablesCount = countCables(mid);
  
    if (cablesCount >= input_N) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

let left = 1;
let right = input_length[Math.floor((input_length.length - 1) / 2)];
let answer = 0;
solution(left, right);

console.log(answer);