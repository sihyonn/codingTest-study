/*
 * 백준 2470번 [두 용액] -> 공통 문제
 * 2024.01.30.화
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2470.txt')
  .toString()
  .split('\n');

const [N] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a-b);

console.log(N, arr);