/*
 * 백준 2805번 [나무 자르기] -> 공통 문제
 * 2024.01.25.목
 */

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input_boj2805.txt')
  .toString()
  .trim()
  .split('\n');

// setting input
const input_check = input[0].split(' ');
const N = +input_check[0];
const M = +input_check[1];

const trees = [];
const input_check2 = input[1].split(' ');
for (let i=0; i < input_check2.length; i++) {
  let temp = +input_check2[i];
  trees.push(temp);
}

trees.sort((a, b) => a - b);

let start = 1;
let end = trees[N-1];
while (start <= end) {
  let cutting_length = 0;
  let mid = Math.floor((start + end) / 2);

  for (const cur of trees) {
    if (cur - mid < 0) continue;
    cutting_length += cur - mid;
  }
  if (cutting_length < M) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);
