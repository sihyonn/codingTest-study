/*
 * 백준 2110번 [공유기 설치] -> 공통 문제
 * 2024.01.23.화
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2110.txt')
  .toString()
  .trim()
  .split('\n');

const input_check1 = input[0].split(' ');
const input_N = +input_check1[0];
const input_C = +input_check1[1];
  
const input_length = [];
for (let i=1; i < input.length; i++) {
  let temp = +input[i];
  input_length.push(temp);
}
  
input_length.sort();

console.log(input_C, input_N, input_length);