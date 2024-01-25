/*
 * 백준 2805번 [나무 자르기] -> 공통 문제
 * 2024.01.17.수
 */

// 입력 방식에 대해 js 상세 공부후 다시 확인 필요
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2110.txt')
  .toString()
  .trim()
  .split('\n');

// 백준 채점용 input
/*
input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
*/

const input_check = input[0].split(' ');
const N = +input_check[0];
const M = +input_check[1];

const trees = [];
for (let i=1; i < input.length; i++) {
  let temp = +input[i];
  trees.push(temp);
}

trees.sort();

console.log(input, N, M, trees);