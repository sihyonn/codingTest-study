/*
 * 백준 2512번 [예산] -> 공통 문제
 * 2024.02.02.금
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2512.txt')
  .toString()
  .split('\n');

// setting input
const N = +input[0];
const arr = input[1].split(' ').map(Number);
const M = +input[2];

console.log(N, arr, M);