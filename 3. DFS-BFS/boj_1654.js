/*
 * 백준 1654번 [랜선 자르기] -> 공통 문제
 * 2024.01.22.월
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

let count = 0;
let cut_length = 0;
while (count === input_N){
  
}